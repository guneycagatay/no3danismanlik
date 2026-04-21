"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <div className="topbar stroke-effect">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="#top" className="flex items-center py-2">
                            <img 
                                src="/img/logo.png" 
                                alt="No3 Danışmanlık" 
                                className="h-10 sm:h-12 w-auto object-contain brightness-110" 
                            />
                        </Link>

                        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
                            <Link className="hover:text-white transition" href="#neden-bu-sistem">Hakkımızda</Link>
                            <Link className="hover:text-white transition" href="#neler-yapiyoruz">Neler Yapıyoruz</Link>
                            <Link className="hover:text-white transition" href="#analiz">Neden Biz</Link>
                            <Link className="hover:text-white transition" href="#nasil-calisir">Nasıl Çalışır</Link>
                            <Link className="hover:text-white transition" href="#paketler">Paketler</Link>
                            <Link className="hover:text-white transition" href="#sss">SSS</Link>
                            <Link className="hover:text-white transition" href="#iletisim">İletişim</Link>
                        </nav>

                        <div className="flex items-center gap-2">
                            <Link href="#iletisim" className="inline-flex items-center justify-center px-4 py-2 rounded-xl grad-btn font-semibold text-sm shadow-lg shadow-black/40 hover:opacity-95 transition">
                                Bilgi Al
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass"
                            >
                                <span className="sr-only">Menüyü aç</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile nav */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4">
                            <div className="divider my-3"></div>
                            <div className="grid gap-2 text-sm text-white/80">
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#neden-bu-sistem">Hakkımızda</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#neler-yapiyoruz">Neler Yapıyoruz</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#analiz">Neden Biz</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#nasil-calisir">Nasıl Çalışır</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#paketler">Paketler</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#sss">SSS</Link>
                                <Link onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl glass" href="#iletisim">İletişim</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
