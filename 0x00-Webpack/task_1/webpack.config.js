const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry point for Webpack
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Name of the output file
  },
  mode: 'production', // Set Webpack mode to production
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS files
          options: {
            presets: ['@babel/preset-env'], // Babel preset for compatibility
          },
        },
      },
    ],
  },
};
