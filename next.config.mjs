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
  },
  output: "export",
};

export default nextConfig;
