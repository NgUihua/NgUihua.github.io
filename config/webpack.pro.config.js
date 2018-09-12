const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 单独打包css
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 生成html
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 每次打包前清除旧的build文件夹
const autoprefixer = require('autoprefixer');


/** 用于打包的webpack配置文件  体积优先**/

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "../client/src/"),      // entry 和 module.rules.loader 选项相对于此目录开始解析
    entry: [
        './index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, '../'),     // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
        publicPath: './',        // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
        filename: 'js/[name]-[hash].js'
    },
    module: {
        rules: [
            {
                //js jsx解析
                test: /\.(js|jsx)$/,
                type: "javascript/auto",
                loaders: ['babel-loader'],
                exclude: path.resolve(__dirname, '../node_modules'),
            },
            {
                // .scss 解析
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
                            },
                        },
                        "sass-loader"
                    ],
                    publicPath: '../'
                }),

            },
            {
                // 文件解析
                test: /\.(eot|woff|svg|ttf|woff2)(\?|$)/,
                use: [
                    // "file-loader?name=assets/[name].[ext]"
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name]-[hash].[ext]'
                        }
                    }
                ]
            },
            {
                // 图片解析
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: 'assets/images/[name]-[hash].[ext]'
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["client/dist"]),
        new ExtractTextPlugin({
            filename: "css/[name].[hash:6].css",    // 生成的文件名
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',                 // 生成文件名
            template: path.resolve(__dirname, '../client/public/index.html'),       // 模板文件
            // favicon: "../public/favicon.ico",        // 自动把根目录下的favicon.ico图片加入html
            inject: 'body'                          // js插入的位置
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        runtimeChunk: {
            name: 'runtime',
        }
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css", ".scss"] //后缀名自动补全
    }
}