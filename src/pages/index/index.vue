<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/components/components'
import { onLaunch, onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  console.log('home组件的banner：', res)
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()

  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
// 获取热门推荐数据
const getHomeHot = async () => {
  const res = await getHomeHotAPI()

  hotList.value = res.result
}

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
  getHomeHot()
})

const xtxGuessLike = ref<XtxGuessInstance>()

let isLoading = false
const onScrollLower = async () => {
  // 避免在数据未加载回来时，出现多次加载
  if (isLoading) return
  isLoading = true
  await xtxGuessLike.value?.getMore()
  isLoading = false
}

// 下拉刷新
const isRefreshTriggered = ref(false)
const onRefreshrefresh = async () => {
  // 重置数据
  xtxGuessLike.value?.resetData()
  isRefreshTriggered.value = true

  Promise.all([getHomeBanner(), getHomeCategory(), getHomeHot(), xtxGuessLike.value?.getMore()])
    .catch(() => {
      uni.showToast({
        icon: 'none',
        title: '加载出错',
      })
    })
    .finally(() => {
      isRefreshTriggered.value = false
    })
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />
  <scroll-view
    refresher-enabled
    scroll-y
    style="flex: 1"
    :refresher-triggered="isRefreshTriggered"
    @scrolltolower="onScrollLower"
    @refresherrefresh="onRefreshrefresh"
  >
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList"></HotPanel>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="xtxGuessLike"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
