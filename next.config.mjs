import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const parsedBaseUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
console.log(parsedBaseUrl);

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