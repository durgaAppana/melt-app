/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["192.168.10.147"],
		minimumCacheTTL: 31536000,
	},
};

module.exports = nextConfig;
