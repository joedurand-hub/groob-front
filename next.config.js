/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: false,
  env: {
    REACT_ENV:'development',
  },
}

module.exports = nextConfig
