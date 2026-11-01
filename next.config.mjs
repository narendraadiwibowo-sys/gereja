/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Webpack config to stabilize chunk IDs across dev restarts
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.moduleIds = 'named';
    }
    return config;
  },
};

export default nextConfig;
