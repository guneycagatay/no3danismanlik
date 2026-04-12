'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">No3</span>
          <span>No3 Danışmanlık</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Anasayfa</Link>
          <Link href="/surec">Süreç</Link>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/uygunluk-testi">Uygunluk Testi</Link>
          <Link href="/neden-no3">Neden No3?</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>

        <Link href="/hizmetler#paketler" className="btn btn-secondary desktop-cta">Randevu Al</Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu-panel">
          <div className="container mobile-menu-inner">
            <Link href="/" onClick={closeMenu}>Anasayfa</Link>
            <Link href="/surec" onClick={closeMenu}>Süreç</Link>
            <Link href="/hizmetler" onClick={closeMenu}>Hizmetler</Link>
            <Link href="/uygunluk-testi" onClick={closeMenu}>Uygunluk Testi</Link>
            <Link href="/neden-no3" onClick={closeMenu}>Neden No3?</Link>
            <Link href="/iletisim" onClick={closeMenu}>İletişim</Link>
            <Link href="/hizmetler#paketler" className="btn btn-primary" onClick={closeMenu}>
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
