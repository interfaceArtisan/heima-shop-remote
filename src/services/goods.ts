import type { GoodsDetail } from '@/types/goods'
import { httpRequest } from '@/utils/http'

export const getGoodsAPI = (id: string) => {
  return httpRequest<GoodsDetail>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
