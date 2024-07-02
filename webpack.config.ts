import path from 'path';
import BuildPlugins from './config/BuildPlugins';
import BuildRules from './config/BuildRules';
import BuildResolve from './config/BuildResolve';
import {
  BuildEnv, BuildMode, BuildOptions, BuildPath,
} from './config/types/config';
import BuildDevServer from './config/BuildDevServer';

const paths:BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

// export default config;
export default (env:BuildEnv) => {
  const mode:BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const api:string = env.api || 'http://localhost:8000';

  const port = env.port || 3000;
  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
    api,
  };
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: BuildPlugins(buildOptions),
    module: {
      rules: BuildRules(buildOptions),
    },
    resolve: BuildResolve(buildOptions),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? BuildDevServer(buildOptions) : undefined,
  };
};
