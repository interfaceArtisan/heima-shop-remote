export enum OrderState {
  // 1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
  DaiFuKuan = 1,
  DaiFaHuo = 2,
  DaiShouHuo = 3,
  DaiPingJia = 4,
  YiWanCheng = 5,
  YiQuXiao = 6,
}

export const OrderStateMap = {
  1: {
    text: '待付款',
  },
  2: {
    text: '待发货',
  },
  3: {
    text: '待收货',
  },
  4: {
    text: '待评价',
  },
  5: {
    text: '已完成',
  },
  6: {
    text: '已取消',
  },
}

export const OrderListTabMap = [
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价', icon: 'icon-comment' },
]
