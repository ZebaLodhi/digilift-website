'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#pipeline', label: 'Services' },
  { href: '/packages', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className={scrolled ? 'header scrolled' : 'header'}>
        <div className="pill">
          <Link className="brand" href="/" aria-label="DigiLift AI home">
            {/* The brand mark is drawn for dark backgrounds, so the header uses
                the tiled icon rather than the transparent one, which is close to
                invisible on white at this size. */}
            <img src="/brand/logo/digilift-ai-icon.svg" alt="" width={34} height={34} />
            <span>DigiLift AI</span>
          </Link>

          <nav className="menu" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="btn btn-ink" href="/bookings">
            Book an audit <Arrow />
          </Link>

          <button
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mnav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className="mnav" id="mnav" aria-label="Mobile">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-ink" href="/bookings" onClick={() => setOpen(false)}>
          Book a growth audit <Arrow />
        </Link>
      </nav>
    </>
  );
}
