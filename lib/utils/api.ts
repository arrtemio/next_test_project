import { Note, NotesLimitResponse } from '../types/INote';

export async function fetchNotes(
  page: number = 1,
  limit: number = 10
): Promise<NotesLimitResponse> {
  const res = await fetch(`http://localhost:3000/api/notes?_page=${page}&_per_page=${limit}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch notes');

  return res.json();
}

export async function fetchNote(id: string): Promise<Note> {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch note');

  return res.json();
}

export async function createNote(note: Omit<Note, 'id'>): Promise<Note> {
  const res = await fetch('http://localhost:3000/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

  if (!res.ok) throw new Error('Failed to create note');

  return res.json();
}

export async function updateNote(note: Note) {
  const res = await fetch(`http://localhost:3000/api/notes/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
}

export async function deleteNote(id: string): Promise<void> {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete note');
}
