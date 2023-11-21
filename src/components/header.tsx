import Link from "next/link";

export function Header() {
  return (
    <header className="items-center h-24">
      <nav className="justify-between">
        <Link href="/">Assombraloja</Link>
      </nav>
    </header>
  );
}
