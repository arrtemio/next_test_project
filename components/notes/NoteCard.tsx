'use client';

import React from 'react';
import { Note } from '@/lib/types/INote';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface NoteCardProps {
  note: Note;
  deleteNote: (id: string) => void;
}

export default function NoteCard({ note, deleteNote }: NoteCardProps) {
  const navigate = useRouter();
  const redirrectToNotePage = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate.push(`/notes/${note.id}`);
  };

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    try {
      await deleteNote(note.id);
      toast.success('Note deleted successfully!');
    } catch (error: unknown) {
      toast.error('Failed to delete note. Please try again later.');
    }
  };

  return (
    <div
      key={note.id}
      onClick={redirrectToNotePage}
      className="border border-gray-300 rounded-lg p-4 shadow-md flex justify-between items-center pointer cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
    >
      <div>
        <h2 className="text-lg font-semibold">{note.title}</h2>
        <p className="text-gray-600">{note.content}</p>
      </div>
      <Button onClick={handleDelete} variant="secondary">
        Delete
      </Button>
    </div>
  );
}
