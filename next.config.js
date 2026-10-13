/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Marvel CDN thumbnails through next/image.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
      },
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
