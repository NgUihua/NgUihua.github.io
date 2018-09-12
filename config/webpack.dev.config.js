const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');


/** 用于开发环境的webpack配置文件  速度优先**/
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "../client/src/"),      // entry 和 module.rules.loader 选项相对于此目录开始解析
    entry: [
        './index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, '../client/dist'),     // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
        // publicPath: '/client/dist/',        // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
        filename: 'js/[name].js'
    },
    devtool: "inline-source-map",        // 报错的时候在控制台输出哪一行报错
    module: {
        rules: [
            {
                //js jsx解析
                test: /\.(js|jsx)$/,
                type: "javascript/auto",
                loaders: ['babel-loader'],
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                // .scss 解析
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
                        },
                    },
                    { loader: "sass-loader" }
                ]
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
        new HtmlWebpackPlugin({
            filename: 'index.html',                 // 生成文件名
            template: '../public/index.html',       // 模板文件
            // favicon: "./public/favicon.ico",        // 自动把根目录下的favicon.ico图片加入html
            inject: 'body'                          // js插入的位置
        }),
        new webpack.HotModuleReplacementPlugin()    // 热更新插件
    ],
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css", ".scss"]   //后缀名自动补全
    },
    devServer: {
        host: 'localhost',      // 服务器的IP地址，可以使用IP也可以使用localhost
        compress: true,         // 服务端压缩是否开启
        port: 3030,             // 端口
        hot: true,
        // open: true,             // 自动打开浏览器
        overlay: {
            errors: true
        }
    }
}