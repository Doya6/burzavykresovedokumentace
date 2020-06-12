import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Main.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/Main',
    name: 'Main',
    component: Main
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router