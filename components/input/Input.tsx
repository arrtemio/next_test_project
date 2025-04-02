'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: string;
  placeholder?: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  label?: string;
  isTextarea?: boolean;
  variant?: 'default' | 'outlined';
}

export default function Input({
  type = 'text',
  placeholder,
  state,
  setState,
  name,
  label,
  isTextarea = false,
  variant = 'default',
  ...rest
}: InputProps) {
  const baseStyles = 'w-full p-2 text-sm';
  const defaultStyles =
    'border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';
  const outlinedStyles =
    'border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300';

  const inputStyles = `${baseStyles} ${variant === 'outlined' ? outlinedStyles : defaultStyles}`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={name}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={inputStyles}
          {...rest}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={inputStyles}
          {...rest}
        />
      )}
    </div>
  );
}
