/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // required for Cloudflare Pages
  distDir: '.output',        // Cloudflare expects this
  images: {
    unoptimized: true,       // required when exporting static
  },
};

export default nextConfig;
