/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  experimental: {
    esmExternals: true
  },
  env: {
    API_KEY: process.env.REACT_APP_API_KEY,
    DB_ID: process.env.REACT_APP_DB_ID
  },
  target: 'serverless',
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
