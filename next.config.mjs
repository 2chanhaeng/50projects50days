/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**unsplash.com",
        port: "",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
