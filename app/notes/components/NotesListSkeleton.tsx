import NoteCardSkeleton from '@/components/notes/NoteCardSkeleton';

export default function NotesListSkeleton() {
  return (
    <ul className="space-y-4">
      {new Array(5).fill(null).map((_, index) => (
        <NoteCardSkeleton key={index} />
      ))}
    </ul>
  );
}
