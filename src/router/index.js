import Vue from 'vue'
import Router from 'vue-router'
import VetcheckApp from '@/components/vetcheck-dapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vetcheck-dapp',
      component: VetcheckApp
    }
  ]
})
