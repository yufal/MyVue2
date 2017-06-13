import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Hello from '@/components/Hello' /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
