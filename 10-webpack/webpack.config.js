const path = require("path")
const HtmlPlugin =require("html-webpack-plugin")
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const entry =require("./webpack_config/entry_webpack")
const CopywebpackPlugin= require("copy-webpack-plugin")
module.exports={
    mode:"development",/*开发项 */
    //入口文件的配置项
    // entry:{
    //     'index':'./src/entry.js'
    // },
    // entry:entry,/* 属性名和属性重名 可以直接使用entry */
    entry,
    //出口文件的配置
    output:{
        path:path.resolve(__dirname,"dist"),/* 打包存的路径名称 */
        filename:'[name].js',/* name 自动引入入口index 名字 */
        publicPath:"http://127.0.0.1:8081/"/* 图片之前的端口路径 */
    },
    //模块 解析器
    module:{
        rules: [
            {
                test:/\.css$/,
                use:[ MiniCssExtractPlugin.loader,'css-loader',"postcss-loader"]
            },
            {
                test:/\.scss/,
                use:[
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,/* 图片格式 */
                use:[{
                    loader:'url-loader',/*  */
                   options:{
                       limit:500,/* 数值过大就会转成base64 转换之后会以编码方式，不会出现image文件 同时数值决定图片的大小 */
                       outputPath:"image/"/* 输出图片路径 */
                   }
                }
            ]  
            },
            {
                test:/\.js$/,
                use:[
                    {  
                    loader:'babel-loader',
                    options:{
                        presets :[
                            '@babel/preset-env'
                        ]
                    }
                    }
                ],
                exclude:'/node_modules/'
            }
        ]
    },
    //插件 扩展应用 html和js引入
    plugins:[
        new  MiniCssExtractPlugin ({
            filename:"css/[name].css"
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,/* 阻止重名 */
            template:"./src/index.html"/* 引入地址 */
        }),
        new CopywebpackPlugin({
            patterns:[{
            from:__dirname + "/src/public",
            to:"./public"
            }]
        })
    ],
    //配置webpack服务  例如 live server 第三方服务器后端开发工具
    devServer:{
        //设置基本路径
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",/* 127.0.0.1 本地服务地址 */
        compress:true,/* 是否开启压缩服务 */
        port:'8081',
        open:true/* 自动打开浏览器 */
    }
}