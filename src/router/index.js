import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import EmojiMessenger from '@/components/EmojiMessenger'
import Vuemeta from 'vue-meta'

Vue.use(Router)
Vue.use(Vuemeta)


export default new Router({
  routes: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        children: [
          {
            path: '/home',
            component: HomePage
          },
          {
            path: '/about',
            component: HomePage
          },
          {
            path: '/offer',
            component: HomePage
          },
          {
            path: '/opinion',
            component: HomePage
          },
          {
            path: '/contact',
            component: HomePage
          }
        ]
      },
      {
        path: '/emoji-messenger',
        name: 'EmojiMessenger',
        component: () => import('../components/EmojiMessenger.vue'),
        children: [
          {
            path: '/application',
            component: EmojiMessenger
          },
          {
            path: '/guide',
            component: EmojiMessenger
          }
        ]
      }
    ]
})



