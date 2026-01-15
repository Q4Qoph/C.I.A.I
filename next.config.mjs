/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig  // Change to ES6 export
