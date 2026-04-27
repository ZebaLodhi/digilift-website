# Installation Instructions

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** version 18 or higher
  - Download from: https://nodejs.org
  - Check version: `node --version`

- **pnpm** (recommended) or npm
  - Install pnpm: `npm install -g pnpm`
  - Check version: `pnpm --version`

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd c:\Users\zebah\Downloads\Daycare-Revamp-Project
```

Or on Mac/Linux:
```bash
cd ~/Downloads/Daycare-Revamp-Project
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

**Expected time**: 2-5 minutes depending on your internet speed.

### 3. Verify Installation

After installation completes, you should see:

```
✓ Dependencies installed successfully
node_modules/ folder created
package-lock.json (or pnpm-lock.yaml) created
```

### 4. Start Development Server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

You should see:

```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### 5. Open in Browser

Visit: **http://localhost:3000**

You should see the DigiLift for Daycare homepage!

## Verification Checklist

Test the following to ensure everything works:

### Navigation
- [ ] Click "Home" in navigation
- [ ] Click "Packages" in navigation
- [ ] Click "About" in navigation
- [ ] Click "Bookings" in navigation
- [ ] Mobile menu opens (resize browser to mobile width)

### Homepage
- [ ] Hero section displays with headline
- [ ] "Book a Free Consult" button is visible
- [ ] Value propositions (4 cards) display
- [ ] Testimonials slider works (click arrows)
- [ ] FAQ section displays

### Packages Page
- [ ] Three package cards display (Starter, Growth, Premium)
- [ ] Comparison table shows
- [ ] "Get Started" buttons work

### About Page
- [ ] Mission section displays
- [ ] 4-step process shows
- [ ] Team section displays
- [ ] Full FAQ accordion works (click to expand)

### Bookings Page
- [ ] Booking form displays
- [ ] Form validation works (try submitting empty)
- [ ] Required field indicators show
- [ ] Services checkboxes work

### Form Submission
- [ ] Fill out the booking form completely
- [ ] Click "Book Your Free Consultation"
- [ ] Success message appears
- [ ] Check `data/requests.json` - your submission should be saved there

### Mobile Responsiveness
- [ ] Resize browser to mobile width (< 768px)
- [ ] Mobile menu hamburger appears
- [ ] Content stacks vertically
- [ ] Forms are usable
- [ ] Text is readable

## Common Installation Issues

### Issue: "command not found: pnpm"

**Solution**: Install pnpm globally
```bash
npm install -g pnpm
```

### Issue: "EACCES: permission denied"

**Solution**: On Mac/Linux, use sudo
```bash
sudo npm install -g pnpm
```

Or fix npm permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

### Issue: "Module not found" errors

**Solution**: Delete and reinstall
```bash
rm -rf node_modules package-lock.json
pnpm install
```

### Issue: Port 3000 is already in use

**Solution**: Kill the process using port 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

Or use a different port:
```bash
pnpm dev -p 3001
```

### Issue: "Cannot find module 'next'"

**Solution**: Ensure you're in the correct directory
```bash
ls  # Should show package.json, app/, components/, etc.
```

If package.json exists, reinstall:
```bash
pnpm install
```

### Issue: Tailwind styles not loading

**Solution**: Clear the build cache
```bash
rm -rf .next
pnpm dev
```

## Building for Production

### Create Production Build

```bash
pnpm build
```

This will:
1. Type-check all TypeScript files
2. Compile and optimize all code
3. Generate static pages
4. Create an optimized production bundle

**Expected output**:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Finalizing page optimization

Route (app)                  Size     First Load JS
┌ ○ /                       5 kB       100 kB
├ ○ /about                  4 kB        99 kB
├ ○ /bookings               6 kB       101 kB
└ ○ /packages               5 kB       100 kB
```

### Test Production Build

```bash
pnpm start
```

Visit http://localhost:3000 to test the production version.

## Environment Variables (Optional)

If you want to set up email functionality:

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your API key:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

3. Restart the dev server:
```bash
pnpm dev
```

## Next Steps

After successful installation:

1. ✅ **Read**: `SETUP.md` for configuration guide
2. ✅ **Customize**: Edit content in `data/*.json` files
3. ✅ **Brand**: Update colors in `tailwind.config.ts`
4. ✅ **Deploy**: Push to GitHub and deploy on Vercel

## Getting Help

If you encounter issues:

1. Check the **Common Issues** section above
2. Read the full `README.md` documentation
3. Visit [Next.js Discussions](https://github.com/vercel/next.js/discussions)
4. Search [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## System Requirements

**Minimum**:
- Node.js 18+
- 2GB RAM
- 500MB disk space

**Recommended**:
- Node.js 20+
- 4GB RAM
- 1GB disk space
- Modern browser (Chrome, Firefox, Safari, Edge)

## Success!

If you see the DigiLift for Daycare homepage and all checklist items pass, you're ready to go! 🎉

**Happy developing!**
