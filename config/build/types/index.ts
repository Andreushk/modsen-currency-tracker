export type WebpackBuildModesType = 'development' | 'production';

export interface IBuildPaths {
  src: string;
  entry: string;
  html: string;
  output: string;
  public: string;
}

export interface IBuildOptions {
  port: number;
  mode: WebpackBuildModesType;
  paths: IBuildPaths;
}
