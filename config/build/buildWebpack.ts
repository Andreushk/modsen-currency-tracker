import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { IBuildOptions } from './types';
import webpack from 'webpack';

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const isDev: boolean = options.mode === 'development';

  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: 'bundle.[fullhash].js',
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
