import config from './src/config/config.js';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const parsedBaseUrl = new URL(config.BASE_URL);

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