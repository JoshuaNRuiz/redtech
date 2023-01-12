const path = require("path");

const remotePatterns = [
    {
        protocol: "https",
        hostname: "redtech.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
    },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns,
    },
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
