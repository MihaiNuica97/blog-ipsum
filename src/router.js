import Vue from 'vue'
import Router from 'vue-router'
import BlogList from './views/BlogList.vue'
import AddBlog from './views/AddBlog.vue'
import SingleBlog from './views/SingleBlog.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "/",
  routes: [
    {
      path:'/portfotio',
      name:'portfolio',
      beforeEnter(){location.href = 'http://mihainuica.com'}
    },
    {
      path: '/',
      name: 'home',
      component: BlogList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/addBlog',
      name:'addblog',
      component:AddBlog
    },
    {
      path:'/blog/:id', component: SingleBlog
    }
  ]
})
