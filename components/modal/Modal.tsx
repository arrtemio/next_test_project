'use client';

import React from 'react';
import Portal from '@/components/portal/Portal';
import Button from '../button/Button';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={() => onClose()}
      >
        <div
          className="w-full max-w-[400px] bg-white rounded-lg shadow-lg p-4 relative modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={() => onClose()}
            variant="unfilled"
            size="small"
            className="absolute top-2 right-2"
          >
            ✕
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
