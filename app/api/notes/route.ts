import { Note } from '@/lib/types/INote';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('_page') || 1;
    const per_page = searchParams.get('_per_page') || 10;

    const res = await fetch(`http://localhost:5000/notes?_page=${page}&_per_page=${per_page}`);

    if (!res.ok) {
      throw new Error('Failed to fetch notes');
    }
    const data = await res.json();

    return NextResponse.json({
      ...data,
      nextPage: data.next !== null ? Number(page) + 1 : null,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: Omit<Note, 'id'> = await request.json();
    const res = await fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error('Failed to create note');
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
}
