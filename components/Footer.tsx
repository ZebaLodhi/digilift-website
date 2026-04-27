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
              <Image
                src="/brand/smalllogo.png"
                alt="DigiLift AI Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  DigiLift AI
                </span>
                <span className="text-sm text-neutral-300">
                  AI-Powered Growth Systems for Schools & Small Businesses
                </span>
              </div>
            </div>
            <p className="text-neutral-200 mb-6 max-w-md">
              We help schools, daycares, childcare centers, and local businesses
              generate qualified leads, automate follow-up, and turn inquiries
              into booked appointments using AI-powered growth systems.
            </p>
            <p className="text-sm text-neutral-400">
              Zeba Lodhi — AI Growth & Automation Consultant
            </p>
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
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-neutral-200 hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-200 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-neutral-200 hover:text-accent transition-colors">
                  Book an Audit
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
              <li className="pt-2 text-neutral-400 text-sm">
                Monday – Friday<br />
                9:00 AM – 6:00 PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-300">
          <p>&copy; {currentYear} DigiLift AI. All rights reserved.</p>
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