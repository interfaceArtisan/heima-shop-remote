import type { MemberProfile, UpdateProfileParams } from '@/types/member'
import { httpRequest } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return httpRequest<MemberProfile>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileAPI = (data: UpdateProfileParams) => {
  return httpRequest<MemberProfile>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
