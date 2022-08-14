import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView/AboutView.vue')
  },
  {
    path: '/house/:id',
    name: 'house',
    component: () => import('@/views/HouseView/HouseView.vue')
  },
  {
    path: '/house/:id/update',
    name: 'update',
    component: () => import('@/views/UpdateView/UpdateView.vue')
  },
  {
    path: '/create-new-listing',
    name: 'create',
    component: () => import('@/views/CreateView/CreateView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
