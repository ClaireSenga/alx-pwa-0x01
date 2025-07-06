import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['m.media-amazon.com'] },
};

export default withPWAInit({ dest: 'public' })({
  ...nextConfig
});
