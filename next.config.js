/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlausibleProxy()({
  nextConfig,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
});
