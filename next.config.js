/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  output: 'out',
  images: {
    domains: ['media.licdn.com', 'wolverineradar.com', 'radarography.com', 'localhost'],
    unoptimized: true,
  },
  basePath: "/wolverineradar", assetPrefix:"/wolverineradar",
  reactStrictMode: false,
  webpack: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};
