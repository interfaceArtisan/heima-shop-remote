<script setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <view class="logo">
      <image class="logo-img" src="@/static/images/logo.png"></image>
      <view class="divider"></view>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script></script>

<style lang="scss">
.navbar {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  background-position: center;
  .logo {
    display: flex;
    align-items: center;
    .logo-img {
      width: 83px;
      height: 20px;
    }
    .divider {
      margin: 0 8px;
      width: 1px;
      height: 12px;
      background-color: #fff;
    }
    .logo-text {
      color: #fff;
    }
  }
  .search {
    margin-top: 25px;
    position: relative;
    color: #fff;
    .icon-search {
      position: relative;
      display: block;
      width: 100%;
      height: 25px;
      padding: 0 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 12px;
      line-height: 25px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .icon-scan {
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }
}
</style>
