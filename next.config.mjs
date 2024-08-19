/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',//static build folder
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-website-backend-nr8w.onrender.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'esitejeremiah.oncliqsupport.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7001',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      },
    ]
  },
  // output: 'export',//enables static builds
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf|png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
