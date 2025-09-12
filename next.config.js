const { withContentlayer } = require("next-contentlayer");


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
};

module.exports = withContentlayer(nextConfig);