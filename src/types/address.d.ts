import type { extend } from "@dcloudio/uni-app";

/**
 * 收货地址：请求体参数
 */
export interface AddressParams {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
}

/**
 * 收货地址列表
 */

export interface AddressItem extends AddressParams {
  id: string
  fullLocation: string
  // 是否选中
  checked?: boolean
}