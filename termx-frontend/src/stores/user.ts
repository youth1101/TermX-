import ACCESS_ENUM from '@/access/accessEnum'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserControllerService } from '../../generated'

export const useUserStore = defineStore('user', () => {
  const loginUser = ref({
    userName: '未登录',
  })

  function updateUser(payload: any) {
    loginUser.value = payload
  }

  // 从远程获取登录信息
  async function getLoginUser() {
    const res = await UserControllerService.getLoginUser()
    if (res.code === 0) {
      updateUser(res.data)
    } else {
      updateUser({
        ...loginUser.value,
        userRole: ACCESS_ENUM.NOT_LOGIN,
      })
    }
  }

  return {
    loginUser,
    updateUser,
    getLoginUser,
  }
})
