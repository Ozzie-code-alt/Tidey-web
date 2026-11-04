/** @type {import('next').NextConfig} */
const aasaJsonHeader = [
  { key: 'Content-Type', value: 'application/json' },
];

const nextConfig = {
  images: { unoptimized: true },
  async headers() {
    // Apple fetches the App Site Association file with no extension and
    // expects JSON — Vercel would otherwise serve it as octet-stream.
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: aasaJsonHeader,
      },
      {
        source: '/apple-app-site-association',
        headers: aasaJsonHeader,
      },
    ];
  },
};

export default nextConfig;
