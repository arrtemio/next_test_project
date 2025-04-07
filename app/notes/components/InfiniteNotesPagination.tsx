'use client';

import React from 'react';
import { useInfiniteQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { NotesLimitResponse } from '@/lib/types/INote';
import { Note } from '@/lib/types/INote';
import { fetchNotes } from '@/lib/utils/api';
import NoteCard from '@/components/notes/NoteCard';
import { deleteNote } from '@/lib/utils/api';
import NoteCardSkeleton from '@/components/notes/NoteCardSkeleton';
import NotesListSkeleton from './NotesListSkeleton';

const queryClient = new QueryClient();

export default function Provider() {
  return (
    <QueryClientProvider client={queryClient}>
      <InfiniteNotesPagination />
    </QueryClientProvider>
  );
}

function InfiniteNotesPagination() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['notes'],
    queryFn: async ({ pageParam }): Promise<NotesLimitResponse> => fetchNotes(pageParam),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage) => firstPage.prev,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleDeleteNote = async (id: string) => {
    await deleteNote(id).then(() => {
      queryClient.setQueryData(['notes'], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            data: page.data.filter((note: Note) => note.id !== id),
          })),
        };
      });
    });
  };

  if (isFetching && !data?.pages.length) {
    return <NotesListSkeleton />;
  }

  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <ul key={pageIndex} className="space-y-4">
          {page.data.map((note: Note) => (
            <NoteCard key={note.id} note={note} deleteNote={() => handleDeleteNote(note.id)} />
          ))}
        </ul>
      ))}
      <div ref={ref} className="mt-4">
        {isFetchingNextPage && <NoteCardSkeleton />}
      </div>
    </div>
  );
}
