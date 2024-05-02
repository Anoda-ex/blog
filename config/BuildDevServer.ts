import webpackDevServer from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export default function ({ port }: BuildOptions): webpackDevServer.Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
