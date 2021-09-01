const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
console.log(process.env.mode)
module.exports = (env, argv) => ({
    entry: './src/index.ts',
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            outputPath: 'dist/assets',
                            publicPath: '../',
                            useRelativePaths: true
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    env.production
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin(
            // {
            // template: 'index.html'
            // }
        ),
        new TerserPlugin({
            terserOptions: {
                compress: argv.mode === 'production' // only if `--mode production` was passed
            }
        }),
        new WebpackManifestPlugin({})
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        usedExports: true,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'assets'),
            watch: true,
        },
        compress: false,
        port: 9000,
        hot: true,
        liveReload: true,
        open: true,
        http2: true,
        // watchFiles: true,
        bonjour: {
            type: 'http',
            protocol: 'udp',
        },
        client: {
            progress: true,
            logging: 'info',
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
});
