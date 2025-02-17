/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "http2.mlstatic.com",
            },
            {
                protocol: "https",
                hostname: "http2.mlstatic.com",
            },
        ],
    },
};

export default nextConfig;

