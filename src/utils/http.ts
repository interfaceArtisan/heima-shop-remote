import { useMemberStore } from '@/stores/index'
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    // 请求超时, 默认60s
    options.timeout = 10000

    const memberStore = useMemberStore()
    const token = memberStore.profile?.token

    token && (options.header.Authorization = token)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}
export const httpRequest = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // success的含义是请求已经到达服务器，服务器有响应的情况
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('原始返回的值：', res)

          resolve(res.data as Data<T>)
        }
        // 401错误，清理用户信息，跳转到登录页
        else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()

          uni.navigateTo({
            url: '/src/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '响应错误',
          })
          reject(res)
        }
        console.log('返回的res的值：', res)
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
