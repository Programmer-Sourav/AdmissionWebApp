import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: { allowedOrigins: ['https://www.travelsawari.com'] },
  },
};

export default nextConfig;
