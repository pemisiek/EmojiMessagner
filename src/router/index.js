import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import EmojiMessenger from '@/components/EmojiMessenger'

Vue.use(Router)


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
        ],
        meta: {
          title: 'MPcoding | Korepetycje z Informatyki',
          metaTags: [
            {
              name: 'description',
              content: 'Korepetycje z zakresu informatyki i programowania. Zajęcia przeznaczone dla uczniów szkół podstawowych oraz liceum obejmują: pakiet MS office, język python, język c++, HTML, CSS & JS.'
            },
            {
              property: 'og:description',
              content: 'Korepetycje z zakresu informatyki i programowania. Zajęcia przeznaczone dla uczniów szkół podstawowych oraz liceum obejmują: pakiet MS office, język python, język c++, HTML, CSS & JS.'
            }
          ]
        } 
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
        ],
        meta: {
          title: 'Emoji Messenger | MPcoding',
          metaTags: [
            {
              name: 'description',
              content: 'Emoji message generator. Convert your text into a string of emoji and send it to your Friend. Create awesome and creative text using this simple generator. '
            },
            {
              property: 'og:description',
              content: 'Emoji message generator. Convert your text into a string of emoji and send it to your Friend. Create awesome and creative text using this simple generator.'
            }
          ]
        }
      }
    ]
})



