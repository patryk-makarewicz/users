/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.REACT_APP_API_KEY,
    DB_ID: process.env.REACT_APP_DB_ID
  },
  distDir: 'build',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
