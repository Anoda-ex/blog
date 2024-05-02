import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin(
      {
        template: paths.html,
      },
    ),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    ...(isDev ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : []),
  ];
}
