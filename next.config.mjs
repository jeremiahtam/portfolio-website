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
        protocol: 'http',
        hostname: 'localhost',
        port: '7001',
        pathname:'/**'
      },
    ]
  },
  // output: 'export',//enables static builds
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf|png|jpg|gif)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
