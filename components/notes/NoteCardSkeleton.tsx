export default function NoteCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md flex justify-between items-center animate-pulse">
      <div>
        <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-48"></div>
      </div>
      <div className="h-8 bg-gray-300 rounded w-20"></div>
    </div>
  );
}
