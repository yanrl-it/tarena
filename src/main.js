import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element_base.css'
Vue.use(ElementUI)

import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.prototype.axios = axios

// import CircleProgress from 'vue-circleprogressbar'
// Vue.use(CircleProgress)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let getFlag = localStorage.getItem('Flag')
  if(getFlag === 'isLogin'){
    store.state.isLogin = true
    next()
    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
       //iViewUi友好提示
      // iView.Message.error('请先退出登录')
      next({
        path: '/Home'
      })
    }
  }else{
    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/',
      })
      //iViewUi友好提示
      // iView.Message.info('请先登录')
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
