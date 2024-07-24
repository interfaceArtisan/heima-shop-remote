import type { AddressParams } from '@/types/address'
import { httpRequest } from '@/utils/http'

/**
 * 添加收货地址的接口
 *
 * @param data
 * @returns
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return httpRequest({
    method: 'POST',
    url: '/member/address',
    data
  })
}