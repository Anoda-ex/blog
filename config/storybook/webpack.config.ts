import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../types/config';
import { cssLoader } from '../rules/cssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
  }));
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(cssLoader(true));

  return config;
};
