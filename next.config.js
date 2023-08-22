const path = require("path");
const withImages = require("next-images");

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", "styles.js"],
};
