# Quick Setup Guide

Follow these steps to get your DigiLift for Daycare website up and running.

## 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
pnpm install
```

Or if you prefer npm:

```bash
npm install
```

This will install all required packages (~5-10 minutes on first run).

## 2. Start Development Server

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 3. Verify Everything Works

Open your browser and check:

- ✅ Homepage loads with hero section
- ✅ Navigation works (try clicking Packages, About, Bookings)
- ✅ Mobile menu works (resize browser or test on mobile)
- ✅ Booking form displays and validates (try submitting empty form)

## 4. Customize Your Content

### Update Contact Information

Edit these files and search for placeholder contact info:

- `components/Footer.tsx` - Update email and phone
- `app/bookings/page.tsx` - Update contact info in sidebar

### Edit Packages

Open `data/packages.json` and update:
- Pricing
- Features
- Descriptions
- Turnaround times

### Edit FAQs

Open `data/faq.json` and add/edit/remove questions.

### Edit Testimonials

Open `data/testimonials.json` and update customer reviews.

See `CONTENT_GUIDE.md` for detailed instructions!

## 5. Configure Email (Optional but Recommended)

Choose one email provider and follow setup in `README.md`:

- **Resend** (recommended, easiest)
- **SendGrid** (popular choice)
- **Nodemailer** (if you have SMTP)

Without email setup, form submissions will only be saved to `data/requests.json`.

## 6. Add Your Branding

### Logo

Replace the SVG logo in `components/LogoMark.tsx` or add your logo image to `/public`.

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { DEFAULT: '#1F3B73' },    // Your primary color
  secondary: { DEFAULT: '#3A7BD5' },  // Your secondary color
  accent: { DEFAULT: '#00C2A8' },     // Your accent color
}
```

### Favicon & Social Images

Add these files to `/public`:
- `favicon.ico` (site icon)
- `og-image.png` (social media preview, 1200x630px)

## 7. Update SEO Settings

Find and replace `https://digilift-daycare.com` with your actual domain in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `public/robots.txt`

## 8. Test Before Deploying

### Run a Production Build

```bash
pnpm build
```

This checks for errors and generates an optimized build.

### Test the Production Build

```bash
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to test the production version.

## 9. Deploy to Vercel

1. Push your code to GitHub (or GitLab/Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your repository

4. Vercel auto-detects Next.js - just click "Deploy"

5. Add environment variables in Vercel dashboard if using email:
   - Settings → Environment Variables
   - Add your `RESEND_API_KEY` or `SENDGRID_API_KEY`

6. Your site will be live at `your-project.vercel.app`

### Add a Custom Domain

1. Go to Project Settings → Domains in Vercel
2. Add your domain (e.g., `yourdomain.com`)
3. Update DNS records as shown by Vercel
4. Update all URLs in code (step 7 above)

## Common Issues & Solutions

### "Module not found" errors

```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Form not submitting

1. Check browser console for errors (F12)
2. Verify API route is working: visit `/api/book` (should show message)
3. Check `data/requests.json` was created

### Styles not loading

1. Make sure `tailwind.config.ts` is present
2. Check `globals.css` is imported in `layout.tsx`
3. Clear `.next` folder and rebuild

### Email not sending

1. Verify provider is configured in `lib/email.ts`
2. Check `.env.local` has correct API key
3. Restart dev server after adding environment variables

## Next Steps

- [ ] Customize all content in `/data/*.json`
- [ ] Add your logo and brand colors
- [ ] Set up email provider
- [ ] Add Google Analytics
- [ ] Create social media images
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Submit to Google Search Console

## Getting Help

- Read the full `README.md` for detailed documentation
- Check `CONTENT_GUIDE.md` for content editing help
- Visit [Next.js Docs](https://nextjs.org/docs)
- Visit [Vercel Docs](https://vercel.com/docs)

---

**You're all set! 🚀**

Run `pnpm dev` and start building your daycare marketing site.
