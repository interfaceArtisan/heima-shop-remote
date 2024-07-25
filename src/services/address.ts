import type { AddressItem, AddressParams } from '@/types/address'
import { httpRequest } from '@/utils/http'

/**
 * 新增收货地址的接口
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

/**
 * 修改地址
 * @param id 修改地址的id，路径参数
 * @param data 修改地址的请求体参数
 * @returns
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return httpRequest<AddressItem>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data
  })
}

export const getMemberAddressListAPI = () => {
  return httpRequest<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 通过id获取收货地址详情
 *
 * @param id
 * @returns
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return httpRequest<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 通过ID删除收货地址
 *
 * @param id 地址的ID
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return httpRequest<{ id: string }>({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}