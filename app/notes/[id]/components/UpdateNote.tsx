'use client';

import React from 'react';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { Note } from '@/lib/types/INote';
import { updateNote } from '@/lib/utils/api';

interface UpdateNoteProps {
  note: Note;
}

type FormValues = {
  title: string;
  content: string;
};

export default function UpdateNote({ note }: UpdateNoteProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: note.title,
      content: note.content,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await updateNote({ ...data, id: note.id });
      toast.success('Note updated successfully! ✅');
    } catch (error: unknown) {
      toast.error('Failed to update note. Please try again later. ❌');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Update Note</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Title field is required!' }}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Title"
                  label="Title"
                  {...field}
                  message={errors.title && errors.title.message}
                />
              )}
            />
          </div>
          <div className="mb-6">
            <Controller
              name="content"
              control={control}
              rules={{ required: 'Content field is required!' }}
              render={({ field }) => (
                <Input
                  isTextarea
                  placeholder="Content"
                  label="Content"
                  {...field}
                  message={errors.content && errors.content.message}
                />
              )}
            />
          </div>
          <Button type="submit">Update</Button>
        </form>
      </div>
    </div>
  );
}
