const path = require('path');
module.exports = {
    devServer: {
        // host: 'localhost',
        host: "0.0.0.0",
        port: 8000, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
        proxy: { //配置自动启动浏览器
            "/api": {
                target: "https://bot-test.dingtax.cn",
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    '^/api': '/'    //代理的路径
                }
            },
        }
    },
    chainWebpack: config => {
        config.module
          .rule('md')
          .test(/\.md/)
          .use('html-loader')
          .loader('html-loader')
          .end()
          .use('markdown-loader')
          .loader('markdown-loader')
          .end()
    }
}
