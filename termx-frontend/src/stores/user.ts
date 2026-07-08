import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const loginUser = ref({
    userName: '未登录',
    role: 'notLogin',
  })

  function updateUser(payload: any) {
    loginUser.value = payload
  }

  function getLoginUser(payload?: any) {
    updateUser({ userName: '鱼皮' })
  }

  return {
    loginUser,
    updateUser,
    getLoginUser,
  }
})
