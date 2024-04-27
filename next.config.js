/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      }
    );
    return config;
  },
};

module.exports = nextConfig;
