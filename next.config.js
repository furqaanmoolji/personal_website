// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // ✅ Don't block builds on ESLint errors
    },
  };
  
  module.exports = nextConfig;
  