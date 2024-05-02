import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
  };
}
