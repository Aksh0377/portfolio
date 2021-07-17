const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    // Where files should be sent once they are bundled
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js'
    },

    // webpack 5 comes with devServer which loads in development mode
    devServer:{
        port: 3000,
        watchContentBase: true,
        inline:false,
        contentBase: "./build",

    },
    
    //source map for better debugging
    devtool: 'inline-source-map',


    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: ['babel-loader', 'eslint-loader']
              
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
              },
        ]

    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}