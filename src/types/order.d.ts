import type { OrderState } from '@/services/constants'

/**
 * 返回信息
 */
export interface PrepayOrder {
  /**
   * 商品集合
   */
  goods: Good[]
  /**
   * 结算信息
   */
  summary: Summary
  /**
   * 用户地址列表
   */
  userAddresses: UserAddress[]
}

/**
 * 商品信息
 */
export interface Good {
  /**
   * 属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string
  /**
   * 数量
   */
  count: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 实付单价
   */
  payPrice: number
  /**
   * 图片
   */
  picture: string
  /**
   * 原单价
   */
  price: number
  /**
   * SKUID
   */
  skuId: string
  /**
   * 实付价格小计
   */
  totalPayPrice: number
  /**
   * 小计总价
   */
  totalPrice: number
  [property: string]: any
}

/**
 * 结算信息
 */
export interface Summary {
  /**
   * 折扣总计
   */
  discountPrice: number
  /**
   * 商品件数
   */
  goodsCount: number
  /**
   * 邮费
   */
  postFee: number
  /**
   * 应付总计
   */
  totalPayPrice: number
  /**
   * 价格总计
   */
  totalPrice: number
}

/**
 * 地址信息
 */
export interface UserAddress {
  /**
   * 详细地址
   */
  address: string
  /**
   * 城市编码
   */
  cityCode: string
  /**
   * 联系方式
   */
  contact: string
  /**
   * 所在区/县编码
   */
  countyCode: string
  /**
   * 完整行政区
   */
  fullLocation: string
  /**
   * id
   */
  id: string
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number
  /**
   * 邮编
   */
  postalCode: string
  /**
   * 省份编码
   */
  provinceCode: string
  /**
   * 收货人
   */
  receiver: string
}

// 提交订单请求参数
export interface OrderCreateParams {
  /**
   * 所选地址Id
   */
  addressId: string
  /**
   * 买家留言
   */
  buyerMessage: string
  /**
   * 配送时间类型，1为不限，2为工作日，3为双休或假日
   */
  deliveryTimeType: number
  /**
   * 商品集合
   */
  goods: { skuId: string; count: number }[]
  /**
   * 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值
   */
  payChannel: number
  /**
   * 支付方式，1为在线支付，2为货到付款
   */
  payType: number
}

// 订单详情
export interface OrderDetail {
  /**
   * 预计到货时间
   */
  arrivalEstimatedTime: string
  /**
   * 交易关闭时间
   */
  closeTime: string
  /**
   * 发货时间
   */
  consignTime: string
  /**
   * 倒计时--剩余的秒数 -1 表示已经超时，正数表示倒计时未结束
   */
  countdown: number
  /**
   * 下单时间
   */
  createTime: string
  /**
   * 配送时间类型，1为不限，2为工作日，3为双休或假日
   */
  deliveryTimeType: number
  /**
   * 交易完成时间
   */
  endTime: string
  /**
   * 完成评价时间
   */
  evaluationTime: string
  /**
   * 订单编号
   */
  id: string
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  orderState: OrderState
  /**
   * 支付渠道，1支付宝、2微信
   */
  payChannel: number
  /**
   * 付款截止时间：剩余的秒数，前台转换成分钟：秒数
   */
  payLatestTime: number
  /**
   * 实付金额
   */
  payMoney: string
  /**
   * 付款时间
   */
  payTime: string
  /**
   * 支付方式，1为在线支付，2为货到付款
   */
  payType: number
  /**
   * 邮费
   */
  postFee: string
  /**
   * 收货人地址
   */
  receiverAddress: string
  /**
   * 收货人
   */
  receiverContact: string
  /**
   * 收货人手机
   */
  receiverMobile: string
  /**
   * 商品集合
   */
  skus: Skus[]
  /**
   * 金额合计
   */
  totalMoney: string
  /**
   * 数量合计
   */
  totalNum: string
}

interface BaseSkus {
  /**
   * 属性说明
   */
  attrsText: string
  /**
   * 单价
   */
  curPrice: number
  /**
   * sku id
   */
  id: string
  /**
   * 图片地址
   */
  image: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 属性集合
   */
  properties: { propertyMainName: string; propertyValueName: string }[]
  /**
   * 数量
   */
  quantity: string
  /**
   * 实付金额
   */
  realPay: number
  /**
   * spu id
   */
  spuId: string
}
/**
 * 商品信息
 */
export interface Skus extends BaseSkus {
  /**
   * 小计
   */
  totalMoney: number
}
// 订单详情结束

// 物流信息
export interface Logistics {
  /**
   * 快递公司
   */
  company: Company
  /**
   * 商品件数
   */
  count: number
  /**
   * 物流日志
   */
  list: List[]
  /**
   * 商品图片
   */
  picture: string
}

/**
 * 快递公司
 */
export interface Company {
  /**
   * 公司名称
   */
  name: string
  /**
   * 快递编号
   */
  number: string
  /**
   * 联系电话
   */
  tel: string
}

export interface List {
  /**
   * 信息ID
   */
  id: string
  /**
   * 信息文字
   */
  text: string
  /**
   * 时间
   */
  time: string
}

// 订单列表
export interface OrderList {
  /**
   * 总记录数
   */
  counts: number
  /**
   * 数据集合
   */
  items: Item[]
  /**
   * 当前页码
   */
  page: string
  /**
   * 总页数
   */
  pages: string
  /**
   * 页尺寸
   */
  pageSize: string
}

/**
 * 订单信息
 */
export interface Item {
  /**
   * 倒计时--剩余的秒数 -1 表示已经超时，正数表示倒计时未结束
   */
  countdown: number
  /**
   * 下单时间
   */
  createTime: string
  /**
   * 订单编号
   */
  id: string
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  orderState: number
  /**
   * 付款截止时间
   */
  payLatestTime: string
  /**
   * 实付金额
   */
  payMoney: number
  /**
   * 支付方式，1为在线支付，2为货到付款
   */
  payType: number
  /**
   * 邮费
   */
  postFee: number
  /**
   * 商品集合
   */
  skus: BaseSkus[]
  /**
   * 金额合计
   */
  totalMoney: number
  /**
   * 数量合计
   */
  totalNum: string
}
// 订单列表结束
