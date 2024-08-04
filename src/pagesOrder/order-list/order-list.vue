<script setup lang="ts">
import { ref } from 'vue'
import OrderList from './components/OrderList.vue'
import { OrderListTabMap } from '@/services/constants'

// 获取页面参数
const query = defineProps<{
  type: string
}>()

// tabs 数据 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消，未传该参数或0为全部
const orderTabs = ref([
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价' },
])

// 高亮下标
const activeIndex = ref(OrderListTabMap.findIndex((v) => v.orderState === Number(query.type)))
</script>

<template>
  <view class="viewport">
    <view class="tabs">
      <text
        class="item"
        v-for="(item, index) in OrderListTabMap"
        :key="item.title"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
      <!-- 游标 -->
      <view class="cursor" :style="{ left: activeIndex * 20 + '%' }"></view>
    </view>
    <!-- 滑动容器 -->
    <swiper class="swiper" :current="activeIndex" @change="activeIndex = $event.detail.current">
      <!-- 滑动项 -->
      <swiper-item v-for="(item, index) in OrderListTabMap" :key="item.title">
        <!-- 订单列表 -->
        <!-- 即使不加v-if，无论是点击还是左右滑动，页面都能正常渲染，不同的是，加了v-if之后，orderList列表会重新渲染 -->
        <OrderList v-if="activeIndex === index" :type="item.orderState" />
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #27ba9b;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  background-color: #f7f7f8;
}
</style>
