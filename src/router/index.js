import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import DashbboardView from '@/views/DashboardView.vue'
//import Dashboard from '@/components/Dashboard.vue'
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const requireAuth = (to, from, next) => {
  const unsubscribe = onAuthStateChanged(auth, (user) =>{
    unsubscribe()
    if (user){
      next()
    } else{
      next('/auth')
    }
  })
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // si escribimos /auth en el navegador nos tiene que llevar al componente auhtview
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: () => import('../views/AddTransactionView.vue'),
      beforeEnter: requireAuth
    }
  ]
})

export default router
