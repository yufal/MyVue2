// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* 这里是引入vue文件 */
/* 这里是引入同目录下的App.vue模块 */
/* 这里是引入vue的路由 */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* 定义作用范围就是index.html里的id为app的范围内 */
/* 引入路由 */
/* 给Vue实例初始一个App组件作为template 相当于默认组件 */
/* 注册引入的组件App.vue */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
