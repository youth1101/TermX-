<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

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
