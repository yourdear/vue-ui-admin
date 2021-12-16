// 通过jenkins自动构建时，前端静态资源第一次需要手动在nginx/html建立目录
// 后续构建通过脚本执行
// rm -rf /usr/local/nginx/html/vueUI/*
// mv /data/jenkins/workspace/vue-ui-admin/dist/*  /usr/local/nginx/html/vueUI/

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vueUI/' : '/',
  devServer: {
    // host: 'localhost',
    host: '0.0.0.0',
    port: 8000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: { // 配置自动启动浏览器
      '/api': {
        target: 'http://localhost:3367',
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          '^/api': '' // 代理的路径
        },
        // onProxyReq (proxyReq, req, res) {
        //   // originHost = req.headers['x-forwarded-for']
        //   const cookie = req.headers['cookie']
        //   if (cookie) {  //如果设置的cookie不生效 可以在main.js里通过document.cookie配合此配置使用
        //     proxyReq.setHeader('cookie', cookie)
        //   }
        // },
        // onProxyRes(proxyRes, req, res) {
        //   if (proxyRes.headers['set-cookie']) {
        //     // 域名信息与实际业务相关
        //     proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map(v => {
        //       return v.replace('domain=.mufeng.me', 'domain=' + originHost.split(':')[0])
        //     })
        //   }
        // },
      }
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
