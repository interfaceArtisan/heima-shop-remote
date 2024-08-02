import type { Logistics, OrderCreateParams, OrderDetail, PrepayOrder } from '@/types/order'
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

/**
 * 获取订单详情
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return httpRequest<OrderDetail>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货 /member/order/consignment/{id}
 */
export const getMemberOrderConsignmentAPI = (id: string) => {
  return httpRequest({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 获取物流信息 /member/order/{id}/logistics
 */
export const getMemberOrderLogisticsAPI = (id: string) => {
  return httpRequest<Logistics>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 确认收货 /member/order/{id}/receipt
 */
export const putMemberOrderReceiptAPI = (id: string) => {
  return httpRequest<OrderDetail>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 删除订单 /member/order
 */
export const deleteMemberOrderAPI = (ids: string[]) => {
  return httpRequest({
    method: 'DELETE',
    url: `/member/order/`,
    data: {
      ids,
    },
  })
}

/**
 * 取消订单 /member/order/{id}/cancel
 */
export const putMemberOrderCancelByIdAPI = (id: string, cancelReason: string) => {
  return httpRequest<OrderDetail>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data: {
      cancelReason,
    },
  })
}
