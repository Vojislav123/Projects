/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
          },
          {
            protocol: 'https',
            hostname: 'epic.gsfc.nasa.gov',
          },
          {
            protocol: 'https',
            hostname: 'api.nasa.gov',
          },
          {
            protocol: 'https',
            hostname: 'images-api.nasa.gov',
          },
          {
            protocol: 'http',
            hostname: 'mars.nasa.gov',
          },
          {
            protocol: 'https',
            hostname: 'mars.nasa.gov',
          },
          {
            protocol: 'http',
            hostname: "mars.jpl.nasa.gov",
          },
          {
            protocol: 'https',
            hostname: "mars.jpl.nasa.gov",
          },
        ],
      },
}

module.exports = nextConfig
