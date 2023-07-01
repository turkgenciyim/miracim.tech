/** @type {import('next').NextConfig} */
const securityHeaders = () => [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // {
  //   key: "Content-Security-Policy",
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  // },
];

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['preact'],
  env: {
    ROOT: __dirname,
  },
  images: {
    formats: ['image/webp'],
  },

  async headers () {
    return [
      {
        source: '/:path*',
        headers: securityHeaders (),
      },
    ];
  },
};
module.exports = nextConfig;
