/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: './dist', 
  experimental: {
    testProxy: true,
  },
}

module.exports = nextConfig