import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/offer',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/opinion',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'HomePage',
      component: HomePage
    }

  ]
})