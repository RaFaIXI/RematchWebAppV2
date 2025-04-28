/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/RematchWebAppV2' : '',
    images: {
      unoptimized: true,
    },
    // This is important for GitHub Pages
    assetPrefix: process.env.NODE_ENV === 'production' ? '/RematchWebAppV2/' : '',
  }
  
  module.exports = nextConfig