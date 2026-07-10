<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import axios from 'axios'

/**
 * 全局初始化函数，在全局单次调用的代码都可以写到这里
 */
const doInit = () => {
  console.log('Terx在线编程判题系统系统')
  axios.get('')
}
onMounted(() => {
  doInit()
})

const router = useRouter()
const store = useUserStore()

router.beforeEach((to, from, next) => {
  // 仅管理员可见，在跳转前判断该用户是否有权限
  if (to.meta?.access === 'canAdmin') {
    if (store.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }
  next()
})
</script>

<style scoped></style>
