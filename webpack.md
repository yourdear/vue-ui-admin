#####2019-06-18
- webpack要点记录

9.js tree Shaking
对于非第三方应用，会自己进行优化，依据就是ES6的模块系统
对于第三方插件，看看此插件是否符合ES模板系统规范，如loadsh正常引入是npm install lodash --save但是这个是没有摇树的
npm install lodash-es --save 这样安装就会摇树优化，这个时候我们在某个js组件里使用
```
import { chunk } from 'lodash-es'
console.log(chunk([1, 2, 3], 2))
```
他就只会打包我们用到的ckunk方法，而不会打包所有的lodsh

10.css tree shaking
- 安装依赖
```
npm install --save-dev mini-css-extract-plugin
npm i glob-all purify-css purifycss-webpack --save-dev
```
- webpack.config.js
```
    module.exports = {
    module: {
            rules: [
                ......
                {
                    test: /\.css$/, // 针对 .css 后缀的文件设置 loader
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader']
                }
            ]
        },
        plugins: [
                ......
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[id].css'
                }),
                // 清除无用 css
                new PurifyCSS({
                    paths: glob.sync([
                        // 要做 CSS Tree Shaking 的路径文件
                        path.resolve(__dirname, './*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
                        path.resolve(__dirname, './src/*.js')
                    ])
                })
            ],
    }
```
11.图片处理汇总
>图片转成base64的优点
- 无额外请求，
- 对于极小或者极简单图片，
- 可像单独图片一样使用，
- 比如背景图片重复使用等，
- 没有跨域问题，
- 无需考虑缓存、文件头或者cookies问题  
>图片转成base64的缺点
- 价则是 CSS 文件体积的增大，意味着 CRP 的阻塞
                  
             


```
npm install url-loader file-loader --save-dev
```
```
module.exports = {
module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              outputPath: 'images/', //输出到 images 文件夹
              limit: 20000 //把小于 20kb 的文件转成 Base64 的格式
            }
          }
        ]
      }
    ]
  }
}
```
