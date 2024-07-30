// post/member/cart

import type { CartItem } from '@/types/cart'
import { httpRequest } from '@/utils/http'
/**
 * 加入购物车
 *
 * @param data
 * @returns
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return httpRequest({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 *
 */
export const getMemberCartListAPI = () => {
  return httpRequest<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 购物车全选/取消全选
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return httpRequest({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}

/**
 * 修改购物车单品，包括数量以及选中状态
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { count?: number; selected?: boolean },
) => {
  return httpRequest({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 删除商品
 */
export const deleteMemberCartBySkuIdAPI = (skuIds: string[]) => {
  return httpRequest({
    method: 'DELETE',
    url: `/member/cart`,
    data: {
      ids: skuIds,
    }
  })
}