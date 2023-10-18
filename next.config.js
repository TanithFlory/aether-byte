/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_GEO_API,
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
