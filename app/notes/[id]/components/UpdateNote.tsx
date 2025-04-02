'use client';

import React from 'react';
import { toast } from 'react-toastify';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { Note } from '@/lib/types/INote';
import { updateNote } from '@/lib/utils/api';

interface UpdateNoteProps {
  note: Note;
}

export default function UpdateNote({ note }: UpdateNoteProps) {
  const [title, setTitle] = React.useState(note.title || '');
  const [content, setContent] = React.useState(note.content || '');

  const handleSubmit = async () => {
    const updatedNote = {
      ...note,
      title: title.trim(),
      content: content.trim(),
    };

    if (!updatedNote.title || !updatedNote.content) {
      toast.warn('Title and content are required fields.');
      setTitle(note.title);
      setContent(note.content);

      return;
    }

    try {
      await updateNote(updatedNote);
      toast.success('Note updated successfully! ✅');
    } catch (error: unknown) {
      toast.error('Failed to update note. Please try again later. ❌');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Update Note</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Title"
            state={title}
            setState={setTitle}
            name="title"
            label="Title"
          />
        </div>
        <div className="mb-6">
          <Input
            isTextarea={true}
            placeholder="Content"
            state={content}
            setState={setContent}
            name="content"
            label="Content"
          />
        </div>
        <Button onClick={handleSubmit}>Update</Button>
      </div>
    </div>
  );
}
