import { httpRequest } from '@/utils/http'

/**
 * 微信小程序支付
 */
export const wxPayMiniPayAPI = (orderId: string) => {
  return httpRequest<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: `/pay/wxPay/miniPay?orderId=${orderId}`,
  })
}

/**
 * 微信小程序模拟支付 /pay/mock
 */
export const wxPayMockAPI = (orderId: string) => {
  return httpRequest({
    method: 'GET',
    url: `/pay/mock?orderId=${orderId}`,
  })
}
