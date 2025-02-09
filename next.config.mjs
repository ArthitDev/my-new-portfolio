/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: true,
    },
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
