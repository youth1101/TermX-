import ACCESS_ENUM from '@/access/accessEnum'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const loginUser = ref({
    userName: '未登录',
    userRole: ACCESS_ENUM.NOT_LOGIN,
  })

  function updateUser(payload: any) {
    loginUser.value = payload
  }

  function getLoginUser(payload?: any) {
    updateUser(payload)
  }

  return {
    loginUser,
    updateUser,
    getLoginUser,
  }
})
