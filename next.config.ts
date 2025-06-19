import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se agrega esta sección para permitir imágenes de dominios externos.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
