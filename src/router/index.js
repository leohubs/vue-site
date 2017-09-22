import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/components/layout'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
