interface BaseMemberProfile {
  /**
   * 账号名称
   */
  account: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 用户昵称
   */
  nickname?: string
  /**
   * 用户Id
   */
  id: string
}

/**
 * 用户信息
 */
export interface LoginResult extends BaseMemberProfile {
  /**
   * 用户手机号
   */
  mobile: string

  /**
   * 用于后续接口调用的token，有效期三天
   */
  token: string
  [key: string]: string
}

/**
 * 个人信息页返回的个人信息
 */
export interface MemberProfile extends BaseMemberProfile {
  /**
   * 生日
   */
  birthday?: string
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string
  /**
   * 性别，男、女、未知
   */
  gender?: Gender

  /**
   * 职业
   */
  profession?: string
}

/**
 * 性别，男、女、未知
 */
export enum Gender {
  女 = '女',
  男 = '男',
}

/**
 * 个人信息-修改：请求体参数
 */
export type UpdateProfileParams = Pick<
  MemberProfile,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /**
   * 城市编码
   */
  cityCode?: string
  /**
   * 区/县编码
   */
  countyCode?: string

  /**
   * 省份编码
   */
  provinceCode?: string
}
