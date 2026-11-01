"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const menu = [
  ["/", "Beranda"],
  ["/warta", "Warta & Agenda"],
  ["/renungan", "Renungan Harian"],
  ["/layanan", "Layanan Jemaat"],
  ["/persembahan", "Persembahan"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top">
      <div className="wrap header-wrap">
        <Link href="/" className="logo-text">
          <span>{site.nama}</span>
          <span className="logo-badge">Purwokerto</span>
        </Link>

        {/* Hamburger Button untuk HP */}
        <button
          className="menu-toggle"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigasi Menu */}
        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Menu utama">
          {menu.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

