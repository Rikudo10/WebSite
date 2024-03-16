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
    {
      path: '/About',
      name: 'about',
      component: () => import('../views/pages/About.vue')
    },
    {
      path: '/Shop',
      name: 'shop',
      component: () => import('../views/pages/Shop.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/pages/Contact.vue')
    },
  ]
})

export default router