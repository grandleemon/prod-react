import type {BuildOptions} from "./types/config"
import {buildPlugins, buildLoaders, buildResolvers} from "./index"
import webpack from "webpack";
import path from "path";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}