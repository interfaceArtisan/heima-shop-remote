import type { PrepayOrder } from '@/types/order'
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