/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  nextConfig,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
};
