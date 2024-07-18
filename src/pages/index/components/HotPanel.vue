<script setup lang="ts">
import type { HotItem } from '@/types/home'
defineProps<{
  list: HotItem[]
}>()
</script>

<template>
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image
          v-for="src in item.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 38rpx;
  background-color: #fff;
  .item {
    width: 50%;
    &:nth-child(even) {
      padding-left: 20rpx;
    }
    .title {
      .title-text {
        font-weight: 600;
      }
      .title-desc {
        font-size: 14px;
        margin-left: 10rpx;
      }
    }
    navigator {
      width: 100%;
      display: flex;

      .image {
        width: 100%;
        height: 200rpx;
        &:nth-child(even) {
          margin-left: 10rpx;
        }
      }
    }
  }
}
</style>
