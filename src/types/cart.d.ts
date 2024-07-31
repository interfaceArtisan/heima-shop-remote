/**
 * 购物车列表数据信息
 */
export interface CartItem {
  /**
   * 属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string
  /**
   * 数量
   */
  count: number
  /**
   * 折扣信息
   */
  discount: number
  /**
   * SPUID
   */
  id: string
  /**
   * 是否收藏
   */
  isCollect: boolean
  /**
   * 是否为有效商品
   */
  isEffective: boolean
  /**
   * 商品名称
   */
  name: string
  /**
   * 当前的价格
   */
  nowPrice: number
  /**
   * 图片
   */
  picture: string
  /**
   * 加入时价格
   */
  price: number
  /**
   * 是否选中
   */
  selected: boolean
  /**
   * SKUID
   */
  skuId: string
  /**
   * 库存
   */
  stock: number

  // 非后端返回字段，主要为了解决vk-data-input-number-box在首次渲染时，会触发change事件
  hasChanged?: boolean
}
