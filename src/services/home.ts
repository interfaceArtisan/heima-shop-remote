import type { BannerItem } from '@/types/home'
import { httpRequest } from '@/utils/http'

export const getHomeBannerAPI = () => {
  return httpRequest<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite: 1,
    },
  })
}
