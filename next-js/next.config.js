/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["192.168.10.121"],
		minimumCacheTTL: 31536000,
	},
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
