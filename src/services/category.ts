import type { CategoryResult } from '@/types/category'
import { httpRequest } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return httpRequest<CategoryResult[]>({
    method: 'GET',
    url: '/category/top',
  })
}