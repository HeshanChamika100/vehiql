/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xnioeqhxncsysthimdvw.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://heshanchamika.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
