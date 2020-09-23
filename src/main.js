import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/svgicon/iconfont'
import './assets/css/base.styl'
import Iconsvg from './components/common/IconSvg'
import i18n from './lang'
import locale from 'element-ui/lib/locale/lang/en'
import { serviceGet, servicepPost } from '@/service/axisoMethods'
Vue.prototype.$get = serviceGet
Vue.prototype.$post = servicepPost


Vue.prototype.$http = axios
Vue.component('icon-svg', Iconsvg) //注册为全局组件
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false
Vue.filter('addNum',(val,val1, val2)=> {
  return val + val1 + val2
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
