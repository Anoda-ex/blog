import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin(
      {
        template: paths.html,
      },
    ),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];
}
