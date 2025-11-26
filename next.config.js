const { webpack } = require('next/dist/compiled/webpack/webpack');

// @ts-check
const isProd = process.env.NODE_ENV === "development";


/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: (isProd) ? "" : ""
}

module.exports = nextConfig,
{
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};
