'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    { href: '/packages', label: 'Services' },
    { href: '/#case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/bookings', label: 'Contact' },
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

          {/* SVG Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="DigiLift AI — Home"
          >
            {/* Arrow Mark */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background square with rounded corners */}
              <rect width="36" height="36" rx="8" fill="#1F3B73" />
              {/* Arrow up-right */}
              <path
                d="M10 24L24 10M24 10H14M24 10V20"
                stroke="#00C2A8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span
                className={[
                  'text-xl font-extrabold tracking-tight',
                  isOverlay ? 'text-slate-900' : 'text-slate-900',
                ].join(' ')}
              >
                DigiLift
                <span className="text-[#00C2A8]"> AI</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                Growth & Automation
              </span>
            </div>
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
              Book an Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={[
              'md:hidden p-2 transition-colors',
              isOverlay ? 'text-black hover:text-black/80' : 'text-dark hover:text-accent',
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
              isOverlay ? 'bg-white/95 border-neutral-200' : 'bg-white border-neutral-200',
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
                      ? 'text-accent'
                      : 'text-dark hover:text-accent',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/bookings"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center px-5 py-2 rounded-xl font-semibold"
              >
                Book an Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}