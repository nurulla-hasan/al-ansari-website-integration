
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const parsedBaseUrl = new URL("http://10.0.60.118:5006" || 'http://localhost:3000');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: parsedBaseUrl.protocol.replace(':', ''), 
            //     hostname: parsedBaseUrl.hostname,
            //     port: parsedBaseUrl.port || '', 
            //     pathname: '/**',
            // },
            {
                protocol: "http", 
                hostname: "**",
            },
            {
                protocol: "https", 
                hostname: "**",
            },
            // {
            //   protocol: 'https',
            //   hostname: parsedBaseUrl.hostname,
            //   port: parsedBaseUrl.port || '',
            //   pathname: '/**',
            // }
        ],
    },
};

export default withNextIntl(nextConfig);