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
@import '../styles/CategoryPanel.scss';
</style>
