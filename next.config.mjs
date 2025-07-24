import createNextIntlPlugin from 'next-intl/plugin'; 

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '13.62.48.83', 
        port: '5001',         
        pathname: '/**', 
      },
    ],
  },
};

export default withNextIntl(nextConfig);
