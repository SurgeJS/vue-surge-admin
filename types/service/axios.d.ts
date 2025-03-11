import 'norm-axios'

declare module 'norm-axios' {
  // 自定义请求配置
  interface Meta {
    // 是否取消消息提示
    isCancelMessagePrompt?: boolean
  }
}
