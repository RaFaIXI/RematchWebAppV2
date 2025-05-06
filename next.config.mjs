/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,

  // 🔁 Redirection vers rematch-guide.com
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://rematch-guide.com/:path*",
        permanent: true, // Utilise true pour une redirection 308 (permanente)
      },
    ];
  },
};

export default nextConfig;
