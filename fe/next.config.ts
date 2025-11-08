import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // accept external image from setting url
  // images: {
  //   remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  // },
  // index.page.tsx... or index.tsx..route.ts
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "tsx",
    "ts",
    "jsx",
    "js",
  ],
};

export default nextConfig;
