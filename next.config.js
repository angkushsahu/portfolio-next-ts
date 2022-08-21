/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		SERVICE_ID: "service_4e48vdn",
		TEMPLATE_ID: "template_2blyoti",
		PUBLIC_KEY: "p-N4YX4VvkVQ4lxz4",
		FORMSPREE_ID: "xjvlnwka",
	},
	pwa: {
		dest: "public",
		register: true,
		swSrc: "sw.js",
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
});

module.exports = nextConfig;
