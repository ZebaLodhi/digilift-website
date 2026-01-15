import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://digilift.ai'),

  title: {
    default: 'DigiLift for Daycare – Digitally Uplifting Local Daycares',
    template: '%s | DigiLift for Daycare',
  },

  description:
    "Transform your daycare's digital presence with professional branding, modern websites, Google Business Profile optimization, and enrollment-focused marketing that builds parent trust.",

  keywords: [
    'daycare marketing',
    'daycare website design',
    'home daycare marketing',
    'childcare digital marketing',
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
    title: 'DigiLift for Daycare – Digitally Uplifting Local Daycares',
    description:
      'We help home-based and local daycares increase enrollment through professional branding, modern websites, and Google Business Profile optimization.',
    images: [
      {
        url: 'https://digilift.ai/og-facebook-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiLift for Daycare – Marketing for Home-Based Daycares',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@digiliftdaycare',
    creator: '@digiliftdaycare',
    title: 'DigiLift for Daycare – Digitally Uplifting Local Daycares',
    description:
      'Enrollment-focused marketing for home-based and local daycares.',
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

  // Helps Facebook, Instagram, Messenger ecosystem
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
