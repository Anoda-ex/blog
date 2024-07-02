export type BuildMode = 'development' | 'production'
export interface BuildPath {
  html: string,
  entry: string,
  build: string,
  src: string,
}
export interface BuildEnv {
  mode?: BuildMode,
  port?: 3000,
  api?: string
}
export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPath,
  isDev: boolean,
  port: number,
  api: string
}
