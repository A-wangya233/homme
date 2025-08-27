import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewColSbj from '../views/NewColSbj.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-colSbj',
    name: 'NewColSbj',
    component: NewColSbj
  },
  {
    path: '/original-colSbj',
    name: 'OriginalColSbj',
    beforeEnter() {
      // 开发环境和生产环境的路径处理
      const baseUrl = process.env.NODE_ENV === 'production' ? '/homme/' : '/'
      window.location.href = baseUrl + 'new-colSbj/index.html'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'hash', // 使用hash模式，适合GitHub Pages
  routes
})

export default router
