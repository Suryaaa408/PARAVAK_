import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/essays",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/reflections",
        destination: "/articles?tag=reflections",
        permanent: true,
      },
      {
        source: "/watch",
        destination: "/podcasts-and-lectures",
        permanent: true,
      },
      {
        source: "/listen",
        destination: "/podcasts-and-lectures",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/articles?category=:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


