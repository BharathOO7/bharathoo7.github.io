import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Mandatory for GitHub Pages static hosting
  output: 'export', 
  
  // 2. Since your repo is bharathoo7.github.io, keep these empty
  basePath: '', 
  assetPrefix: '', 

  // 3. Images must be unoptimized for static exports
  images: {
    unoptimized: true, 
  },

  reactStrictMode: false,
  
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  }
};

export default nextConfig;