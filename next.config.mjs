/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.stamp.fyi", "aquamarine-famous-penguin-727.mypinata.cloud"],
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
};

export default nextConfig;
