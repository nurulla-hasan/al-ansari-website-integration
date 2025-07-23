
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const parsedBaseUrl = new URL("http://13.62.48.83:5001" || 'http://localhost:3000');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: parsedBaseUrl.protocol.replace(':', ''), 
                hostname: parsedBaseUrl.hostname,
                port: parsedBaseUrl.port || '', 
                pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: parsedBaseUrl.hostname,
              port: parsedBaseUrl.port || '',
              pathname: '/**',
            }
            // {
            //     protocol: "http", 
            //     hostname: "**",
            // },
            // {
            //     protocol: "https", 
            //     hostname: "**",
            // },
        ],
    },
};

export default withNextIntl(nextConfig);