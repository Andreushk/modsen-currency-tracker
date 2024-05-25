import { IBuildPaths, WebpackBuildModesType } from './config/build/types';
import { buildWebpack } from './config/build/buildWebpack';
import webpack from 'webpack';
import path from 'path';

interface IEnvVariables {
  mode: WebpackBuildModesType;
  port: number;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });
  return config;
};
