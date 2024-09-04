/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  output: 'standalone',
  images: {
    domains: ['media.licdn.com', 'wolverineradar.com', 'radarography.com', 'localhost', process.env.NEXT_PUBLIC_CDN_BASE.replace(/^https?:\/\//, ''), 'lh3.googleusercontent.com', 's.gravatar.com'],
  },
  reactStrictMode: false,
  webpack: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};
