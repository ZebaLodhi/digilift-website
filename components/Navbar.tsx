'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isOverlay = pathname === '/' && !isScrolled;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
    { href: '/about', label: 'About' },
    { href: '/bookings', label: 'Bookings' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isOverlay ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-soft',
      ].join(' ')}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* LOGO — Bigger + High Quality */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="DigiLift for Daycare — Home"
          >
            <Image
              src="/brand/digilift-logo-dark.png"
              alt="DigiLift for Daycare"
              width={200}
              height={80}
              priority
              className="
                object-contain
                h-16
                w-auto
                md:h-20
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'font-semibold transition-colors',
                  isActive(link.href)
                    ? isOverlay
                      ? 'text-black'
                      : 'text-accent'
                    : isOverlay
                      ? 'text-black/90 hover:text-black'
                      : 'text-dark hover:text-accent',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/bookings"
              className={[
                'btn-primary px-5 py-2 rounded-xl font-semibold',
                isOverlay ? 'shadow-md' : '',
              ].join(' ')}
            >
              Book a Free Consult
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={[
              'md:hidden p-2 transition-colors',
              isOverlay ? 'text-black hover:text-white/80' : 'text-dark hover:text-accent',
            ].join(' ')}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className={[
              'md:hidden py-4 animate-fade-in border-t',
              isOverlay ? 'bg-black/60 border-white/20' : 'bg-white border-neutral-200',
            ].join(' ')}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    'font-semibold py-2 transition-colors',
                    isActive(link.href)
                      ? isOverlay
                        ? 'text-white'
                        : 'text-accent'
                      : isOverlay
                        ? 'text-white/90 hover:text-white'
                        : 'text-dark hover:text-accent',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/bookings"
                onClick={() => setIsOpen(false)}
                className={[
                  'btn-primary text-center px-5 py-2 rounded-xl font-semibold',
                  isOverlay ? 'shadow-md' : '',
                ].join(' ')}
              >
                Book a Free Consult
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
