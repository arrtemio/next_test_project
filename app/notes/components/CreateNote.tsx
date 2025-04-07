'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { createNote } from '@/lib/utils/api';

type FormValues = {
  title: string;
  content: string;
};

export default function CreateNote() {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onSubmit = async (data: FormValues) => {
    try {
      await createNote(data);
      toast.success('Note created successfully!');
    } catch (error: unknown) {
      toast.error('Failed to create note. Please try again later.');
    }
  };

  return (
    <>
      <div className="flex justify-end pb-4">
        <Button onClick={handleOpen}>Add Note</Button>
      </div>
      {isOpen && (
        <Modal onClose={handleClose}>
          <div className="w-full p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="flex justify-end">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
