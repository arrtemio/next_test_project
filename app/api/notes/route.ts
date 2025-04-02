import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const res = await fetch('http://localhost:5000/notes');

    if (!res.ok) {
      throw new Error('Failed to fetch notes');
    }
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }
}
