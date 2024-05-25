import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    open: true,
    port: options.port ?? 3000,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  };
}
