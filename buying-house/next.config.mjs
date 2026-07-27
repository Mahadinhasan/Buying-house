/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/server',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/servers',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fabric',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fabrics',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
