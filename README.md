# DigiLift for Daycare - Marketing Website

A modern, responsive marketing website built with Next.js 14, TypeScript, and Tailwind CSS for DigiLift for Daycare - a digital transformation service for local daycare centers.

## Features

- **4 Main Pages**: Home, Packages, About, Bookings
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Metadata, Open Graph, JSON-LD schema, sitemap, robots.txt
- **Content Management**: Simple JSON-based CMS for easy content updates
- **Booking System**: Custom form with validation and email notifications
- **Performance Optimized**: Built for Lighthouse 90+ scores
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Deploy Ready**: Configured for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Deployment**: Vercel

## Project Structure

```
digilift-daycare/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── api/
│   │   └── book/
│   │       └── route.ts       # Booking API endpoint
│   ├── bookings/
│   │   └── page.tsx          # Bookings page
│   ├── packages/
│   │   └── page.tsx          # Packages page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Sitemap generator
├── components/
│   ├── BookingForm.tsx       # Booking form with validation
│   ├── ComparisonTable.tsx   # Package comparison table
│   ├── CTA.tsx               # Call-to-action section
│   ├── FAQ.tsx               # FAQ accordion component
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Homepage hero
│   ├── LogoMark.tsx          # SVG logo component
│   ├── Navbar.tsx            # Navigation bar
│   ├── PackageCard.tsx       # Individual package card
│   ├── Testimonials.tsx      # Testimonials slider
│   └── ValueProps.tsx        # Value propositions section
├── data/
│   ├── faq.json              # FAQ content
│   ├── packages.json         # Package details
│   ├── requests.json         # Booking submissions (generated)
│   └── testimonials.json     # Customer testimonials
├── lib/
│   ├── email.ts              # Email sending utilities
│   └── validators.ts         # Zod validation schemas
├── public/
│   ├── favicon.ico           # Site favicon (add your own)
│   ├── og-image.png          # Open Graph image (add your own)
│   └── robots.txt            # Robots file
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 18+ or npm/pnpm/yarn

### Installation

1. **Install dependencies**:

```bash
pnpm install
# or
npm install
# or
yarn install
```

2. **Run the development server**:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## Content Management

All content is stored in JSON files in the `/data` directory for easy editing without touching code.

### Editing Packages (`/data/packages.json`)

Update package information, pricing, features, and descriptions:

```json
{
  "id": "starter",
  "name": "Starter",
  "tagline": "Perfect for Getting Started",
  "price": "$1,497",
  "priceNote": "one-time",
  "turnaround": "2-3 weeks",
  "description": "...",
  "features": ["Feature 1", "Feature 2"]
}
```

### Editing FAQs (`/data/faq.json`)

Add, remove, or update FAQ items:

```json
{
  "question": "Your question here?",
  "answer": "Your detailed answer here."
}
```

### Editing Testimonials (`/data/testimonials.json`)

Update customer testimonials:

```json
{
  "id": 1,
  "name": "Customer Name",
  "role": "Owner",
  "business": "Business Name",
  "location": "City, State",
  "rating": 5,
  "quote": "The testimonial quote...",
  "results": "Key result achieved"
}
```

## Booking Form Configuration

### Option 1: Using the Custom Form (Default)

The custom booking form is already integrated and working. It:

- Validates input on client and server
- Sends email notifications (see Email Setup below)
- Saves submissions to `/data/requests.json`

### Option 2: Using Calendly

To use Calendly instead:

1. Sign up at [calendly.com](https://calendly.com)
2. Get your Calendly scheduling link
3. Open `/app/bookings/page.tsx`
4. Uncomment the Calendly section (lines marked with comments)
5. Replace `your-calendly-link` with your actual link
6. Comment out or remove the `<BookingForm />` component

## Email Setup

The booking form can send email notifications. Configure your preferred provider:

### Option 1: Resend (Recommended)

1. Install Resend:
```bash
pnpm add resend
```

2. Get your API key from [resend.com](https://resend.com)

3. Create `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

4. Edit `/lib/email.ts` and uncomment the Resend implementation

### Option 2: SendGrid

1. Install SendGrid:
```bash
pnpm add @sendgrid/mail
```

2. Get your API key from [sendgrid.com](https://sendgrid.com)

3. Create `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
```

4. Edit `/lib/email.ts` and uncomment the SendGrid implementation

### Option 3: Custom SMTP with Nodemailer

1. Install Nodemailer:
```bash
pnpm add nodemailer
```

2. Configure with your SMTP credentials in `/lib/email.ts`

## Google Analytics Setup

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)

2. Get your measurement ID (format: `G-XXXXXXXXXX`)

3. Open `/app/layout.tsx`

4. Uncomment the Google Analytics script

5. Replace `G-XXXXXXXXXX` with your measurement ID

## Customization

### Colors

Edit the color palette in `/tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1F3B73',  // Navy
    // ... other shades
  },
  secondary: {
    DEFAULT: '#3A7BD5',  // Blue
    // ...
  },
  accent: {
    DEFAULT: '#00C2A8',  // Teal
    // ...
  },
}
```

### Logo

The logo is an SVG component in `/components/LogoMark.tsx`. You can:

- Replace it with your own SVG design
- Or add a PNG/JPG to `/public` and use Next.js `<Image>` component

### Fonts

The project uses system fonts by default. To add custom fonts:

1. Use [next/font](https://nextjs.org/docs/app/api-reference/components/font) for Google Fonts
2. Or add font files to `/public/fonts` and configure in `globals.css`

## SEO Configuration

### Update Base URL

The domain is configured as `https://digilift.ai` in:

- `/app/layout.tsx` (metadata base URL)
- `/app/sitemap.ts`
- `/app/robots.ts`
- `/public/robots.txt`

### Add Social Images

Create and add these images to `/public`:

- `favicon.ico` (32x32 or 16x16)
- `og-image.png` (1200x630 for Open Graph)

You can use tools like [Canva](https://canva.com) or [Figma](https://figma.com) to create these.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your repository

4. Vercel will auto-detect Next.js and configure build settings

5. Add environment variables if using email:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` or `SENDGRID_API_KEY`

6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Project Settings → Domains

2. Add your custom domain

3. Update DNS records as instructed by Vercel

4. Update all references to the base URL in the code (see SEO Configuration)

### Deploy to Other Platforms

This Next.js app can also deploy to:

- **Netlify**: Use the Next.js runtime
- **Railway**: Supports Next.js out of the box
- **DigitalOcean App Platform**: Choose Next.js template
- **AWS Amplify**: Connect your Git repository

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Performance

The site is optimized for Lighthouse scores 90+:

- Static page generation where possible
- Optimized images with Next/Image
- Minimal JavaScript bundle
- Semantic HTML for accessibility
- Proper caching headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Troubleshooting

### Form submissions not saving

Check that `/data/requests.json` exists and is writable. The API route will create it if missing.

### Email not sending

1. Verify your email provider is configured in `/lib/email.ts`
2. Check API key is set in `.env.local`
3. Check server logs for errors: `pnpm dev` should show console output

### Build errors

1. Delete `.next` folder and `node_modules`
2. Run `pnpm install` again
3. Run `pnpm build`

### Styling issues

1. Make sure Tailwind is configured correctly
2. Check `globals.css` is imported in `layout.tsx`
3. Verify PostCSS config is present

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for DigiLift for Daycare
