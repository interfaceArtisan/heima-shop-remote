<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HomeSkeleton from './components/Skeleton.vue'
import HotPanel from './components/HotPanel.vue'
import { useGuessLike } from '@/composables/gussLike'

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

const isSkeltonShow = ref(true)
onLoad(() => {
  Promise.all([getHomeBanner(), getHomeCategory(), getHomeHot()])
    .then(() => {
      isSkeltonShow.value = false
    })
    .catch(() => {
      uni.showToast({
        icon: 'none',
        title: '加载出错',
      })
    })
})

const { xtxGuessLike, onScrollLower } = useGuessLike()

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
    <HomeSkeleton v-if="isSkeltonShow"></HomeSkeleton>
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="xtxGuessLike"></XtxGuess>
    </template>
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
