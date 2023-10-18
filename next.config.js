/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  output: 'standalone',
  images: {
    domains: ['media.licdn.com', 'wolverineradar.com', 'radarography.com', 'localhost'],
  },
  reactStrictMode: false,
  webpack: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};