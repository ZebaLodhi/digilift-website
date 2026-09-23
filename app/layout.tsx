import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://digilift.ai'),

  title: {
    default: 'Your All-In-One Solution: Tech, AI and Marketing | DigiLift AI',
    template: '%s | DigiLift AI',
  },

  description:
    'DigiLift AI builds and markets digital solutions that grow your business. IT development, AI-powered solutions, digital marketing, customer acquisition and growth strategy under one roof.',

  keywords: [
    'IT development',
    'AI-powered solutions',
    'digital marketing agency',
    'customer acquisition',
    'growth strategy',
    'custom software development',
    'workflow automation',
    'member portal development',
  ],

  authors: [{ name: 'DigiLift AI' }],
  creator: 'DigiLift AI',
  publisher: 'DigiLift AI',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digilift.ai/',
    siteName: 'DigiLift AI',
    title: 'Your All-In-One Solution: Tech, AI and Marketing | DigiLift AI',
    description:
      'We build and market digital solutions that grow your business \u2014 from idea to impact.',
    images: [
      {
        url: 'https://digilift.ai/og-facebook-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiLift AI \u2014 People, Technology, Possibilities',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DigiLift AI \u2014 Technology, AI and Marketing',
    description:
      'We build and market digital solutions that grow your business \u2014 from idea to impact.',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/logo/digilift-ai-icon.svg', type: 'image/svg+xml' },
      { url: '/brand/logo/digilift-ai-icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/brand/logo/digilift-ai-icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
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
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
