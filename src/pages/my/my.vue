<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { httpRequest } from '@/utils/http'

const memberStore = useMemberStore()

interface Item {
  id: string
  imgUrl: string
}
const onTestRequest = async () => {
  const res = await httpRequest<Item[]>({
    method: 'GET',
    url: '/home/banner',
  })
  console.log('最后请求回来的数据 修改代码：', res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '1234',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="onTestRequest">测试请求接口</button>
  </view>
</template>

<style lang="scss">
//
</style>
