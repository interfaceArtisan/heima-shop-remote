import type { OrderCreateParams, PrepayOrder } from '@/types/order'
import { httpRequest } from '@/utils/http'

/**
 *
 * 获取预付款订单
 */
export const getPrepayOrderAPI = () => {
  return httpRequest<PrepayOrder>({
    method: 'GET',
    url: `/member/order/pre`,
  })
}

type OrderParams = {
  /**
   * 下单时已经选择好的地址id
   */
  addressId?: string
  /**
   * 购买商品的数量
   */
  count: string
  /**
   * 商品skuId
   */
  skuId: string
}
/**
 * 获取立即购买订单 /member/order/pre/now
 */
export const getMemberOrderPreNowAPI = (data: OrderParams) => {
  return httpRequest<PrepayOrder>({
    method: 'GET',
    url: `/member/order/pre/now?addressId=${data.addressId}&count=${data.count}&skuId=${data.skuId}`,
  })
}

/**
 * 提交订单
 * @param data
 * @returns
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return httpRequest<{ id: string }>({
    method: 'POST',
    url: `/member/order`,
    data,
  })
}
