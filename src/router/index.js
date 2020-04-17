import Vue from 'vue'
import Router from 'vue-router'
import first from '@/views/first'
import map from '@/views/map'
import second from '@/views/second'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/vantapp',
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ]
})
