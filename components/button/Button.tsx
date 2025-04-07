'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'unfilled';
  size?: 'normal' | 'small';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'normal',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded cursor-pointer';
  const sizeStyles = {
    normal: 'text-base py-2 px-4',
    small: 'text-sm py-1 px-3',
  };
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    unfilled: 'bg-transparent border-none hover:bg-gray-100 text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
