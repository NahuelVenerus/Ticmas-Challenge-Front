import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,      
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: false, 
    },
  },
};

export default nextConfig;
