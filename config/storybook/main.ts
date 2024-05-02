import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { cssLoader } from '../rules/cssLoader';
import BuildResolve from '../BuildResolve';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module.rules.push(cssLoader(true));
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) => /svg/.test((rule.test as string)));
    // @ts-ignore
    fileLoaderRule.exclude = /svg/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, '..', '..', 'src'), 'node_modules'],
    };
    return config;
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
};
export default config;
