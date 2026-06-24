/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — `next build` writes a fully static site to ./out
  // that you can upload to any host (Vercel, Netlify, GitHub Pages, S3, etc.)
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
