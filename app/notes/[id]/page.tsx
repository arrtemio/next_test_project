import { Metadata } from 'next';
import { Note } from '@/lib/types/INote';
import { fetchNote } from '@/lib/utils/api';
import UpdateNote from './components/UpdateNote';
import { IMeta } from '@/lib/types/IMeta';

export async function generateMetadata({ params, searchParams }: IMeta): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Update Note ${id}`,
    description: `Update Note ${id}`,
  };
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data: Note = await fetchNote(id);

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-gray-800 my-4">Note: {data.id}</h1>
      <UpdateNote note={data} />
    </>
  );
}
