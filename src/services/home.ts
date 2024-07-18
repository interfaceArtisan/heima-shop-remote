import type { PageResult, PageParams } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { httpRequest } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return httpRequest<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页分类
export const getHomeCategoryAPI = () => {
  return httpRequest<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页热门推荐
export const getHomeHotAPI = () => {
  return httpRequest<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 首页猜你喜欢
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return httpRequest<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
