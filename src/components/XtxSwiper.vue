<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const activeIndex = ref(0)

// 当 swiper 下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail.current
}
// 定义 props 接收
defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        :class="['dot', { active: index === activeIndex }]"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}
.carousel {
  position: relative;
  height: 100%;
  .navigator {
    height: 100%;
  }
  .indicator {
    position: absolute;
    bottom: 8px;
    height: 2px;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 0;
    .dot {
      display: inline-block;
      height: 100%;
      width: 10px;
      margin: 0 1px;
      border-radius: 3px;
      background-color: #fff;
      &.active {
        background-color: aquamarine;
      }
    }
  }
}
// @import './styles/XtxSwiper.scss';
</style>
