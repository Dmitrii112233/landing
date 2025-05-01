import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Company</div>
        <div>
          <Link href="/#about">About</Link> |
          <Link href="/#team">Team</Link> |
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
