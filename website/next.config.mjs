/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.MJINFO_STATIC_EXPORT === "1" ? "export" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
