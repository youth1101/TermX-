<template>
  <div>
    <a-row id="globalHeader" class="grid-demo" style="margin-bottom: 16px" align="center">
      <a-col flex="auto">
        <div>
          <a-menu
            mode="horizontal"
            :selected-keys="selectedKeys"
            @menu-item-click="doMenuClick"
          >
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div class="title-bar">
                <img class="logo" src="@/assets/logo.svg" />
              </div>
            </a-menu-item>
            <a-menu-item v-for="item in routes" :key="item.path">
              {{ item.name }}
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>

      <a-col flex="100px">
        <div>{{ store?.loginUser?.userName ?? '未登录' }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const store = useUserStore()
// 默认主页
const selectedKeys = ref(['/'])

// 路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})

// setTimeout(() => {
//   store.getLoginUser({
//     userName: '鱼皮',
//     role: 'admin',
//   })
// }, 3000)

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  })
}
</script>

<style scoped>
.title-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 88px;
}
</style>
