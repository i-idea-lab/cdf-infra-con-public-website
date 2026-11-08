/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/pages/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/pages/projects',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/pages/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/pages/ourEquipment',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/pages/carrers',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/pages/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/pages/leaderShipmem-information/:slug',
        destination: '/leadership/:slug',
        permanent: true,
      },
      {
        source: '/pages/ourLeaderShipMem/:id',
        destination: '/leadership/advisory-:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
