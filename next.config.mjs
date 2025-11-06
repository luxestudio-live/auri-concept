/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/auri-concept',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
