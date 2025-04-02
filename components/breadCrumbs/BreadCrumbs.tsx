'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadCrumbs() {
  const path = usePathname();
  const segments = path.split('/').filter(Boolean);
  const isRoot = segments.length === 0;

  if (isRoot) return null;

  return (
    <nav className="flex items-center space-x-2 mb-4 text-sm">
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      {segments.map((segment, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        const isLast = i === segments.length - 1;
        return isLast ? (
          <span key={href} className="text-gray-600 font-bold">
            / {decodeURIComponent(segment)}
          </span>
        ) : (
          <Link key={href} href={href} className="text-blue-500 hover:underline">
            / {decodeURIComponent(segment)}
          </Link>
        );
      })}
    </nav>
  );
}
