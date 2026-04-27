import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://digilift.ai'),

  title: {
    default: 'Daycare Website Design & Marketing | DigiLift for Daycare',
    template: '%s | DigiLift for Daycare',
  },

  description:
    'DigiLift for Daycare helps home-based and local daycare centers increase enrollment through professional website design, Google Business Profile optimization, and parent-focused digital marketing.',

  keywords: [
    'daycare website design',
    'daycare marketing',
    'home daycare marketing',
    'childcare website design',
    'Google Business Profile for daycares',
    'daycare SEO',
    'daycare branding',
    'daycare enrollment marketing',
  ],

  authors: [{ name: 'DigiLift for Daycare' }],
  creator: 'DigiLift for Daycare',
  publisher: 'DigiLift for Daycare',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digilift.ai/',
    siteName: 'DigiLift for Daycare',
    title: 'Daycare Website Design & Marketing | DigiLift for Daycare',
    description:
      'Enrollment-focused website design and digital marketing built specifically for home-based and local daycare centers.',
    images: [
      {
        url: 'https://digilift.ai/og-facebook-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiLift for Daycare – Daycare Website Design & Marketing',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@digiliftdaycare',
    creator: '@digiliftdaycare',
    title: 'DigiLift for Daycare – Daycare Website Design & Marketing',
    description:
      'Enrollment-focused marketing and websites for home-based and local daycares.',
    images: ['https://digilift.ai/og-facebook-v2.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'fb:app_id': '966242223397117',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
