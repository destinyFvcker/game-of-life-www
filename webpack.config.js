const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true, // 启用异步 WebAssembly 实验特性
  },
  module: {
    rules: [
      {
        test: /\.wasm$/, // 匹配 WebAssembly 文件
        type: "webassembly/async", // 设置模块类型为 WebAssembly 异步
      },
    ],
  },
  plugins: [new CopyWebpackPlugin(["index.html"])],
};
