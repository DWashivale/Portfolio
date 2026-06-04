/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local public/ images (already supported by default)
    // Also allow any external image domains if needed later
    remotePatterns: [],
  },
};

module.exports = nextConfig;
