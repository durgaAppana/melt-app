/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["localhost"],
		minimumCacheTTL: 31536000,
	},
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
