/*
 * @Author: tim
 * @Date: 2020-06-03 11:35:01
 * @LastEditors: tim
 * @LastEditTime: 2020-06-03 14:54:42
 * @Description: 
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      // { path: '/', component: () => import('./components/Home.vue') },
      { path: '/hello', component: () => import('./components/helloWord.vue') },
      // { path: '/item/:id', component: () => import('./components/Item.vue') }
    ]
  })
}