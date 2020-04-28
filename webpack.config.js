const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/declaration.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use:
                    [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[name].css'
                            }
                        },
                        'extract-loader',
                        'css-loader',
                        'resolve-url-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].html'
                        }
                    },
                    'extract-loader',
                    'html-loader',
                    'pug-html-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            // publicPath: '../fonts/'
                        }
                    }
                ]
            }
        ],
   },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};