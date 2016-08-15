'use strict'

const path = require('path');
const webpack = require("webpack");
const env = process.env.NODE_ENV;

let config = {
  entry: {
    app :'./ts/entrypoint.ts'
  },
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js',".tsx", '.js']
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }/*
      { test: /\.ts$/, loader: 'awesome-typescript-loader'},
      { test: /\.tsx?$/, loader: "ts-loader" }*/  // this line cause the errror "cannot find name requires"
    ]
  },

/*
  preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
  ],
*/
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
}




if (env === 'production') {
  // JS圧縮
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
} else {
  // ソースマップ
  config.devtool = 'source-map';
}

module.exports = config;
