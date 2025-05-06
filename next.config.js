/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/anvogue',
    assetPrefix: '/anvogue/',
}

module.exports = nextConfig
