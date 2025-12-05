import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://digilift-daycare.com'),
  title: {
    default: 'DigiLift for Daycare - Digitally Uplifting Local Daycares',
    template: '%s | DigiLift for Daycare',
  },
  description:
    'Transform your daycare\'s digital presence with our complete revamp service. Google Business Profile optimization, modern websites, brand refresh, and online booking systems to fill more seats and build parent trust.',
  keywords: [
    'daycare marketing',
    'daycare website',
    'Google Business Profile',
    'daycare branding',
    'childcare marketing',
    'daycare SEO',
    'online booking for daycares',
    'daycare digital marketing',
  ],
  authors: [{ name: 'DigiLift for Daycare' }],
  creator: 'DigiLift for Daycare',
  publisher: 'DigiLift for Daycare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digilift-daycare.com',
    siteName: 'DigiLift for Daycare',
    title: 'DigiLift for Daycare - Digitally Uplifting Local Daycares',
    description:
      'Transform your daycare with professional branding, modern websites, and Google Business Profile optimization. Increase enrollment and build trust with parents.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DigiLift for Daycare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiLift for Daycare - Digitally Uplifting Local Daycares',
    description:
      'Transform your daycare with professional branding, modern websites, and Google Business Profile optimization.',
    images: ['/og-image.png'],
    creator: '@digiliftdaycare',
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace with your GA4 measurement ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> */}
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
