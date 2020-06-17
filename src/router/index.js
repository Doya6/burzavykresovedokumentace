import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [

    {
    path: '/components/Main',
    name: 'Main',
    component: Main
    },
    {
    path: '/components/Home',
    name: 'Home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router