/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  assetPrefix: '',     // 🔥 important for CSS/JS paths
};

export default nextConfig;
