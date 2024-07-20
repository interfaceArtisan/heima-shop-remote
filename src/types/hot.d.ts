import type { PageResult } from './global'

export interface HotResult {
  /**
   * 活动图片
   */
  bannerPicture: string
  /**
   * id信息
   */
  id: string
  /**
   * 子类选项集合
   */
  subTypes: SubType[]
  /**
   * 活动标题
   */
  title: string
}

/**
 * 子类选项
 */
export interface SubType {
  goodsItems: PageResult<Item>
  /**
   * 子类选项id
   */
  id: string
  /**
   * 子类选项名称
   */
  title: string
}

/**
 * 商品项
 */
export interface Item {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
