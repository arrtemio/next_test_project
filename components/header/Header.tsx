import Link from 'next/link';
import Button from '../button/Button';

export default function Header() {
  return (
    <header className="flex h-[50px] w-full bg-gray-200 items-center">
      <div className="flex w-full container">
        <nav className="flex gap-4 ml-auto">
          <Link href={'/'}>
            <Button>Home</Button>
          </Link>
          <Link href={'/notes'}>
            <Button>Notes</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
