'use client';

import React from 'react';
import Portal from '@/components/portal/Portal';

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
          className="bg-white rounded-lg shadow-lg p-4 relative modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onClose()}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
