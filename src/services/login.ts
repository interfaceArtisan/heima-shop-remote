import type { LoginResult } from '@/types/member'
import { httpRequest } from '@/utils/http'

type loginParams = {
  code: string
  encryptedData: string
  iv: string
}

export const loginAPI = (data: loginParams) => {
  return httpRequest<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const loginSimpleAPI = (phoneNumber: string) => {
  return httpRequest<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
