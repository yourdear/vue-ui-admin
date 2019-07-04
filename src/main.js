import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/svgicon/iconfont'
import './assets/css/base.styl'
import Iconsvg from './components/common/IconSvg'
Vue.prototype.$http = axios
Vue.component('icon-svg', Iconsvg) //注册为全局组件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
