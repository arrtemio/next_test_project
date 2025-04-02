import { Note } from '@/lib/types/INote';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/notes/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Note deleted successfully' });
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const res = await fetch(`http://localhost:5000/notes/${id}`);
    if (!res.ok) throw new Error('Note not found');

    const note = await res.json();

    return NextResponse.json(note);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
}

export async function PUT(req: Request) {
  try {
    const note: Note = await req.json();

    const res = await fetch(`http://localhost:5000/notes/${note.id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error('Failed to update note');

    return NextResponse.json({ message: 'Note updated successfully' });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
}
