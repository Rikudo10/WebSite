import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/Home.vue')
    },
    {
      path: '/Donate',
      name: 'donate',
      component: () => import('../views/pages/Donate.vue')
    },
  ]
})

export default router