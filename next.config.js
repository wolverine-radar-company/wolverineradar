/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['media.licdn.com', 'wolverineradar.com', 'radarography.com', 'localhost'],
    unoptimized: true,
  },
  reactStrictMode: false,
  webpack: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};
