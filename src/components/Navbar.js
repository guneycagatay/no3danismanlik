import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="brand">
          <span className="brand-mark">No3</span>
          <span>No3 Danışmanlık</span>
        </Link>

        <nav className="nav-links">
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/neden-no3">Neden No3?</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>

        <Link href="/iletisim" className="btn btn-secondary">Randevu Al</Link>
      </div>
    </header>
  );
}
