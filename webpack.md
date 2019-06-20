##### 2019-06-20 补之前的笔记
1. 新建webpack文件
- 创建一个空文件
- 敲命令
```
    npm init -y
    npm i webpack --save-dev
    npm i webpack-cli --save-dev
```
- 在package.json里面配置命令
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```
- webpack4.0开始默认的打包入口是 ./src/index.js，所以需要在根目录下新建文件夹src然后新建文件index.js
- 敲命令
```
    npm run build
```
就可以看到dist包了

2.生产模式和开发模式
通过在package.json里面配置运行命令，后面通过mode来区分生产模式和开发模式
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
```
- production mode(生产模式)  可以开箱即用地进行各种优化。 包括压缩，作用域提升，tree-shaking 等。
- development mode(开发模式) 针对速度进行了优化，仅仅提供了一种不压缩的 bundle
- 在 webpack4 中，可以在没有一行配置的情况下完成任务！ 只需定义 –mode 参数即可获得所有内容！

3.配置打包入口和出口,再根目录新建webpack.config.js

```
const path = require('path')

module.exports = {
  entry: {
    app: '.src/index.js' // 需要打包的文件入口
  },
  output: {
    publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
    filename: 'bundle.js' // 打包后生产的 js 文件
  }
}

```
- path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。从盘符开始
- __dirname: 当前项目的名称
- 安装配置后每次需要把dist包已存在内容清掉，然后再去打包，需要安装下面的插件
```
npm install clean-webpack-plugin --save-dev

```
- webpack.config.js修改配置
```
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    plugins: [
        new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
      ]
}

```



4.安装babel 用来编译ES6让浏览器认识
- 安装
```
npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime --save-dev
npm i @babel/polyfill @babel/runtime
npm install --save core-js@3
```
- 根目录下新建 .babelrc 内容如下
```
{
 "presets": [
   [
     "@babel/preset-env",
     {
       "useBuiltIns": "usage",
       "corejs": 3
     }
   ]
 ],
 "plugins": ["@babel/plugin-transform-runtime"]
}
```
- webpack.config.js配置loader
```
    module.exports = {
        ......
        module: {
          rules: [
            {
              test: /\.js$/, // 使用正则来匹配 js 文件
              exclude: /node_modules/, // 排除依赖包文件夹
              use: {
                loader: 'babel-loader' // 使用 babel-loader
              }
            }
          ]
        }
    }
```
- 根目录下新建 .browserslistrc文件，用于在不同前端工具之间共享目标浏览器版本和Node.js版本的配置
```
# 所支持的浏览器版本

> 1% # 全球使用情况统计选择的浏览器版本

last 2 version # 每个浏览器的最后两个版本

not ie <= 8 # 排除小于 ie8 以下的浏览器

```
5.代码分割 拆分出公共代码 
- 使用splitChunksPlugins，无须引入webpack自带模块之一
- webpack.config.js配置
```
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    ......
    output: {
        ......    
        filename: '[name].bundle.js', // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码拆分后的文件名
    },
     optimization: {
             splitChunks: {
                 chunks: 'all', //分割所有代码，包括同步代码和异步代码
                 minSize: 30000,
                 maxSize: 0,
                 minChunks: 1,
                 maxAsyncRequests: 5,
                 maxInitialRequests: 3,
                 automaticNameDelimiter: '~',
                 name: true,
                 cacheGroups: {
                     vendors: {
                         test: /[\\/]node_modules[\\/]/, //只有 node_modules 引入的第三方库会被分割
                         priority: -10
                     },
                     default: {
                         minChunks: 2,
                         priority: -20,
                         reuseExistingChunk: true
                     }
                 }
             }
         },
}

```
- webpack 代码分割的配置是这样的，比如我们要分割 jQuery 和 lodash 这样的第三方库，它会先经过 chunks、minSize、maxSize、minChunks 等等，满足条件后生成 jQuery 和 lodash 两个文件，然后放入 cacheGroup 中缓存着，再根据你在 cacheGroup 中配置的组来决定是将两个文件整合到一个文件打包，还是单独分开打包，比如上面代码中的 vendors，就是将 node_modules 中所有的第三方库都打包到 vendors.js 文件中
- 如果还想继续分割,即单独打包文件就像下面这样利用test和priority（级别越高越会被先打包，就会被单独打包）
```
cacheGroups: {
  lodash: {
    name: 'lodash',
    test: /[\\/]node_modules[\\/]lodash[\\/]/,
    priority: 5  // 优先级要大于 vendors 不然会被打包进 vendors
  },
  vendors: {
    test: /[\\/]node_modules[\\/]/,
    priority: -10
  },
  default: {
    minChunks: 2,
    priority: -20,
    reuseExistingChunk: true
  }
}
```
6.Lazy Loading、Prefetching (懒加载与预读)
- 不需要额外的配置就是尽量使用异步加载的方式，举个例子，页面有一个点击事件，就可以写成异步的加载到
页面（如写一个click.js文件，通过import加载进来，这个时候click.js不会跟其余同步代码一个加载，会在空闲的时候加载）
，这样可以提升页面响应速度
- 与 prefetch 相比，Preload 指令有很多不同之处：
Prefetch 会等待核心代码加载完之后，有空闲之后再去加载。Preload 会和核心的代码并行加载，还是不推荐

7.自动生成index.html
```
npm i html-webpack-plugin html-loader --save-dev
```
- webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入插件
module.exports = {
 output: {
        publicPath: './', // js 引用的路径或者 CDN 地址
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: '[name].bundle.js', // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码拆分后的文件名
    },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: '自动生成 HTML',
      minify: {
        // 压缩 HTML 文件
        removeComments: true, // 移除 HTML 中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压缩内联 css
      },
      filename: 'index.html', // 生成后的文件名
      template: 'index.html' // 根据此模版生成 HTML 文件
    })
  ]
}

```
一定要修改out里面的publicpath因为项目后续部署到服务器，肯定是在服务器上读取这些资源
- title: 打包后生成 html 的 title
- filename：打包后的 html 文件名称
- template：模板文件（例子源码中根目录下的 index.html）
- chunks：和 entry 配置中相匹配，支持多页面、多入口
- minify：压缩选项

8.处理css/scss文件
```
npm i css-loader style-loader --save-dev
```
- 通过这两个loader会把css文件打包成js文件
- 如果想单独打包成css文件需要安装插件
```
npm i mini-css-extract-plugin --save-dev
```
- 还要安装压缩css的插件
```
npm install optimize-css-assets-webpack-plugin --save-dev
```
```
npm i node-sass sass-loader --save-dev

```
- webpack.config.js
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 针对 .css 后缀的文件设置 loader
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader' // 使用 sass-loader 将 scss 转为 css
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}


```
- 但是mini-css-extract-plugin暂时还不支持热加载所以一般在生产环境使用，开发环境还是使用style-loader
- rules.use的加载顺序是最后的最先执行
- 添加浏览兼容前缀
```
npm install postcss-loader autoprefixer --save-dev

```
根目录下新建  postcss.config.js
```
module.exports = {
  plugins: [require('autoprefixer')]
}
```
```
module: {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/, // 针对 .sass .scss 或者 .css 后缀的文件设置 loader
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
        'sass-loader' // 使用 sass-loader 将 scss 转为 css
      ]
    }
  ]
}

```


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
