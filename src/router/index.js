import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/empleados',
      name: 'empleado',
      component: () => import('../views/EmpleadoView.vue')
    }
  ]
})

export default router
