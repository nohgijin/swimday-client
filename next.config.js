/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/record",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://morning-badlands-42969-319cd5b52254.herokuapp.com/api/:path*",
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/color.scss"; @import "styles/typo.scss"; @import "styles/mixin.scss";`,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias.canvas = false;

    return config;
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};

module.exports = nextConfig;
