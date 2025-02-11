import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/effectDemo',
      name: 'effectDemo',
      component: () => import('../components/EffectDemo.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/textBottomLineAnimation',
      name: 'textBottomLineAnimation',
      component: () => import('../components/CSSAndAnimation/TextBottomLine.vue'),
    },
    {
      path: '/debounceDemo',
      name: 'debounceDemo',
      component: () => import('../components/ValidateCustomRef.vue'),
    }
  ],
})

export default router
