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
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
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
      {
        source: '/leadership/11',
        destination: '/leadership/c-d-fakir',
        permanent: true,
      },
      {
        source: '/leadership/12',
        destination: '/leadership/amer-c-fakir',
        permanent: true,
      },
      {
        source: '/leadership/13',
        destination: '/leadership/amman-c-fakir',
        permanent: true,
      },
      {
        source: '/leadership/advisory-1',
        destination: '/leadership/dilip-g-palve',
        permanent: true,
      },
      {
        source: '/leadership/advisory-2',
        destination: '/leadership/m-v-patil',
        permanent: true,
      },
      {
        source: '/leadership/advisory-3',
        destination: '/leadership/l-s-joshi',
        permanent: true,
      },
      {
        source: '/leadership/advisory-4',
        destination: '/leadership/v-b-bhale',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
