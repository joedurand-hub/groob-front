/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: false,
  env: {
    REACT_ENV:'production',
  },
}

module.exports = nextConfig
