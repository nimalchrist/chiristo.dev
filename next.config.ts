import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config: Configuration): Configuration {
    // Find the default file-loader rule for SVGs
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        typeof rule === 'object' &&
        rule !== null &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
    );

    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      // Exclude SVG from the existing file loader
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add a new rule to handle SVGs using @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
