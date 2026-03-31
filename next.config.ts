import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trovaverhuur.nl",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
