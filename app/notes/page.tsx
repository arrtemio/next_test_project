import React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchNotes } from '@/lib/utils/api';
import NotesListSkeleton from './components/NotesListSkeleton';
import CreateNote from './components/CreateNote';

export const metadata: Metadata = {
  title: 'Notes title',
  description: 'Notes description',
};

const NotesList = React.lazy(() => import('@/app/notes/components/NotesList'));

export default function Notes() {
  const data = React.use(fetchNotes());

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-gray-800 my-4">Notes</h1>
      <CreateNote />
      <Suspense fallback={<NotesListSkeleton />}>
        <NotesList data={data} />
      </Suspense>
    </>
  );
}
