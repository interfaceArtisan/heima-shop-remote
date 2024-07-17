<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'

import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLaunch, onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()

  bannerList.value = res.result
  console.log('home组件的banner：', res)
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <XtxSwiper :list="bannerList"></XtxSwiper>
  </view>
</template>

<style lang="scss">
//
</style>
