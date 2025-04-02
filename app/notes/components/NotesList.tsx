'use client';

import React from 'react';
import { Note } from '@/lib/types/INote';
import NoteCard from '@/components/notes/NoteCard';
import { deleteNote } from '@/lib/utils/api';

interface NotesListProps {
  data: Note[];
}

export default function NotesList({ data }: NotesListProps) {
  const [notes, setNotes] = React.useState<Note[]>(data);

  const handleDeleteNote = async (id: number) => {
    await deleteNote(id).then(() =>
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
    );
  };

  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} deleteNote={() => handleDeleteNote(note.id)} />
      ))}
    </ul>
  );
}
