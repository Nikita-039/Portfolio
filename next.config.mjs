
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {};

export default {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(new URL('.', import.meta.url).pathname),
    };
    return config;
  },
};