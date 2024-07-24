import type { LoginResult } from '@/types/member'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type UpdateProfileParams = {
  [key: string]: string | undefined
}

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<LoginResult>()

    // 保存会员信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    const updateProfile = (data: UpdateProfileParams) => {
      for (const [key, value] of Object.entries(data)) {
        if (value) [(profile!.value![key] = value)]
      }
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
      updateProfile,
    }
  },
  // TODO: 持久化
  {
    // 网页端
    // persist: true,
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
