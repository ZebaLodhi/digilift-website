import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">

              {/* ⭐ SMALL LOGO FROM /public/brand/smalllogo.png */}
              <Image
                src="/brand/smalllogo.png"
                alt="DigiLift Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />

              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  DigiLift for Daycare
                </span>
                <span className="text-sm text-neutral-300">
                  Digitally Uplifting Local Daycares
                </span>
              </div>
            </div>

            <p className="text-neutral-200 mb-6 max-w-md">
              Helping local daycare centers modernize their digital presence, fill more seats,
              and build trust with parents through professional branding, websites, and online marketing.
            </p>

            {/* ⭐ SOCIAL ICONS HIDDEN */}
            {/*
            <div className="flex gap-4">
              <a href="https://facebook.com" ...> ... </a>
              <a href="https://instagram.com" ...> ... </a>
              <a href="https://linkedin.com" ...> ... </a>
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-200 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-neutral-200 hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-200 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-neutral-200 hover:text-accent transition-colors">
                  Book a Consult
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-200">
              <li>
                <a href="mailto:team@digilift.ai" className="hover:text-accent transition-colors">
                  team@digilift.ai
                </a>
              </li>
              <li>
                <a href="tel:+15715876824" className="hover:text-accent transition-colors">
                  (571) 587-6824
                </a>
              </li>
              <li className="pt-2">
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-300">
          <p>&copy; {currentYear} DigiLift for Daycare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
