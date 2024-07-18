<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <navigator
      v-for="item in list"
      :key="item.id"
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
    >
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.category {
  display: flex;
  flex-wrap: wrap;
  padding: 10rpx 0;
  margin: 20rpx 0 0;
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      margin-top: 10rpx;
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
