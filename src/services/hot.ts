import type { HotResult } from '@/types/hot'
import { httpRequest } from '@/utils/http'

export const getHotAPI = (
  url: string,
  data?: { subType?: string; pageSize?: number; page?: number },
) => {
  return httpRequest<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
