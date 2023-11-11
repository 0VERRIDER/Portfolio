/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn.jsdelivr.net', 
            'symbols.getvecta.com',
            'fastapi.tiangolo.com',
        ],
    },
}

module.exports = nextConfig
