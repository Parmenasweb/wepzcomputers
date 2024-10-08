/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "upload.wikimedia.org",
        protocol: "https",
      },
      {
        hostname: "logos-world.net",
        protocol: "https",
      },
      {
        hostname: "1000logos.net",
        protocol: "https",
      },
      {
        hostname: "blogs.microsoft.com",
        protocol: "https",
      },
      {
        hostname: "cdn-icons-png.flaticon.com",
        protocol: "https",
      },
      {
        hostname: "www.openstreetmap.org",
        protocol: "https",
      },
      {
        hostname: "wepzcomputers.in",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
