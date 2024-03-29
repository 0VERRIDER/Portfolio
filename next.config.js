/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa')(
    {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    })

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

module.exports = withPwa(nextConfig)
