var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:  'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'ejs-render-loader?name=ryan!./src/index.ejs',
                options: {
                    name: 'ryan'
                }
            }
        )
    ],
    module: {         
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: "babel-loader" 
            }               
        ]
    }   
}
