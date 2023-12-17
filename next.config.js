/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['i.annihil.us'],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
