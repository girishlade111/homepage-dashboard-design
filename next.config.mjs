/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/homepage-dashboard-design',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig