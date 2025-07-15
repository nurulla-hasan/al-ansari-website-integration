import createNextIntlPlugin from 'next-intl/plugin'; 

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '10.0.60.118',
                port: '5006',
                pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: '10.0.60.118',
              port: '5006',
              pathname: '/**',
            }
        ],
    },
};

export default withNextIntl(nextConfig);