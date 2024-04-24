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
            // ...
        );
        return config;
    }
}

module.exports = nextConfig
