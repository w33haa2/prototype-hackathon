import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Datasets from '@/views/Datasets.vue'
import Discussions from '@/views/Discussions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/datasets',
      name: 'datasets',
      component: Datasets,
      meta: {
        layout: 'user'
      }
    },
    {
      path: '/discussions',
      name: 'discussions',
      component: Discussions,
      meta: {
        layout: 'user'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
