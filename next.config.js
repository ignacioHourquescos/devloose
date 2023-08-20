const path = require("path");
const withImages = require("next-images");

const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	reactStrictMode: true,
	swcMinify: true,
	output: "standalone",
	pageExtensions: [
		"mdx",
		"md",
		"jsx",
		"js",
		"tsx",
		"ts",
		"page.tsx",
		"page.ts",
		"page.jsx",
		"page.js",
	],
};

module.exports = nextConfig;
