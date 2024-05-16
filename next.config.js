/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search?target=record',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:1337/api/:path*`,
        // destination: 'https://morning-badlands-42969-319cd5b52254.herokuapp.com/api/:path'
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/color.scss"; @import "styles/typo.scss";`,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
}

module.exports = nextConfig
