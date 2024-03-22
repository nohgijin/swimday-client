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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/color.scss"; @import "styles/typo.scss";`,
  },
}

module.exports = nextConfig
