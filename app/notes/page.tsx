import React from 'react';
import type { Metadata } from 'next';
import CreateNote from './components/CreateNote';
import InfiniteNotesPagination from './components/InfiniteNotesPagination';

export const metadata: Metadata = {
  title: 'Notes title',
  description: 'Notes description',
};

export default function Notes() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-gray-800 my-4">Notes</h1>
      <CreateNote />
      <InfiniteNotesPagination />
    </>
  );
}
