/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {};

export default {
...nextConfig,
webpack: (config) => {
config.resolve.alias = {
...config.resolve.alias,
'@': path.resolve(__dirname),
};
return config;
},
};