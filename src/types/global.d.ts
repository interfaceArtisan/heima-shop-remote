export interface PageParams {
  page: number
  pageSize: number
}

// 通用分页结果类型
export interface PageResult<T> {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: T[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}
