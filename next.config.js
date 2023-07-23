/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        // hostname: "res.cloudinary.com",
        // port: "",
        // pathname: "/dr6pegkgw/image/uploads/**",
        // domains: ["res.cloudinary.com"],
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dr6pegkgw/image/uploads/:path*",
        destination: `https://res.cloudinary.com`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
