/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
