"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/portfolio";

const links = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Selected work" },
  { href: "/#approach", label: "How I work" },
  { href: "/#about", label: "About" },
  { href: "/#resume", label: "Résumé" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="portfolio-header">
      <div className="portfolio-container header-inner">
        <Link href="/" className="wordmark" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <span className="monogram">{profile.initials}<span>.</span></span>
          <span className="wordmark-name">{profile.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="nav-contact" href="/#contact">Let’s talk <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>
          <span>{open ? "Close" : "Menu"}</span><span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav portfolio-container" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/#contact" onClick={() => setOpen(false)}>Let’s talk ↗</Link>
      </nav>}
    </header>
  );
}
