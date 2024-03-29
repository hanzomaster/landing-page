import { env } from './src/env.js';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    // add source.unsplash.com to the remote pattern
    // domains: ["source.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      // {
      //   protocol: "http",
      //   hostname: "42.96.13.169",
      //   port: "3113",
      //   pathname: "/download/**"
      // },
      {
        protocol: env.S3_PROTOCOL,
        hostname: env.S3_HOST,
        port: env.S3_PORT,
        pathname: env.S3_PATHNAME,
      },
    ],
  },
};

export default config;
