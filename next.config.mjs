/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require('path');

module.exports = {
  //... other configurations ...
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;
