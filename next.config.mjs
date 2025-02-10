/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
