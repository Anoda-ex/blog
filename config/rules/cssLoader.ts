import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from '../types/config';

export const cssLoader = (isDev: boolean):webpack.RuleSetRule => (
  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module.scss/,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },

        },
      },
      'sass-loader',
    ],
  }
);
