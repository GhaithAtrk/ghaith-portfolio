/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    esmExternals: true 
  },
};

module.exports = nextConfig;
