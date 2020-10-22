import Vue from 'vue'
import VueRouter from 'vue-router'
import Reception from "views/reception"
import ArticalList from "cmp/articalList"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: {
      name: 'home'
    },
    component: Reception,
    children: [
      {
        path: 'home',
        name: 'home',
        component: ArticalList
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
