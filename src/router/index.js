import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Equipment from '../views/Equipment.vue'
import System from '../views/System.vue'
import CodeAdd from '../views/actionpage/CodeAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/Dashboard',
        component: Dashboard,
        meta: {
          isLogin: true
        }
      },
      {
        path: '/Equipment',
        component: Equipment,
        meta: {
          isLogin: true
        }
      },
      {
        path: '/System',
        component: System,
        meta: {
          isLogin: true
        }
      }
    ],
    meta: {
      isLogin: true
    }
  },
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      isLogin: false
    }
  },
  //用户操作路由
  {
    path: '/CodeAdd',
    component: CodeAdd,
    meta: {
      isLogin: true
    }
  },
  {
    path: '*',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
