/* eslint-disable */
const { name } = require("./package");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 8001;
module.exports = {
  devServer: {
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        'vue$': 'vue/dist/vue.esm-bundler.js'
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
    module: {
      rules: [
        {
          test:  /\.html$/,
          use: 'vue-html-loader'
        },
      ]
    },
    externals: {
      
    }
  },
};
