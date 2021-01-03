import Vue from 'vue'
import VueRouter from 'vue-router'
import TextForm from '../views/TextForm.vue'
import TextAnaliz from '../views/TextAnaliz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TextForm',
    component: TextForm
  },
  {
    path: '/TextAnaliz',
    name: 'TextAnaliz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TextAnaliz
    // component: () => import(/* webpackChunkName: "about" */ '../views/TextAnaliz.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
