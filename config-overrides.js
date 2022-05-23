const webpack = require("webpack");
const {
  override,
  addWebpackResolve,
  overrideDevServer,
  addWebpackPlugin,
} = require("customize-cra");

module.exports = override(
  addWebpackResolve({
    fallback: {
      util: require.resolve("util/"),
      buffer: require.resolve("buffer"),
    },
  }),

  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  )
);
