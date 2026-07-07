import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import AboutView from '@/components/AboutView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '浏览题目',
    component: HomeView,
  },
  {
    path: '/about',
    name: '关于我的',
    component: AboutView,
  },
]
