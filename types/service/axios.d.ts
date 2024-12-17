import 'axios'

declare module 'axios' {
  // 自定义请求配置
  interface AxiosRequestConfig {
    // 是否取消消息提示
    isCancelMessagePrompt?: boolean
  }
}
