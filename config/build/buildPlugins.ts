import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import { IBuildOptions } from './types';
import path from 'path';

export function buildPlugins(options: IBuildOptions): Configuration['plugins'] {
  const isDev: boolean = options.mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, 'favicon.ico'),
    }),
    new Dotenv(),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
  }

  return plugins;
}
