import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-cv",
  assetPrefix: "/Portfolio-cv",
  images: { unoptimized: true },
};

export default nextConfig;
