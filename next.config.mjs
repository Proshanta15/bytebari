/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
   experimental: {
    optimizeCss: true, // Optional: For better CSS optimization
  },
  images: {
    unoptimized: true, // <-- THIS IS THE KEY FIX
  },
};

export default nextConfig;
