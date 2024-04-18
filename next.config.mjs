/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://fakestoreapi.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
