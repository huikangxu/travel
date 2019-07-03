// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick' //引入fastClick,解决小程序端click延迟300ms的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css' //引入基础样式reset.css文件
import './assets/styles/border.css' 
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
 
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper, /* { default global options } */) //轮播图插件，可添加参数

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
