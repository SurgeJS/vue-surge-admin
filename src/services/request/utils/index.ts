import type { ResponseContent, ResponseError } from '@/services/request/axios/types'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'
import MessageConstant from '@/constant/message'
import ServiceConstant from '@/constant/service'
import useAuthStore from '@/store/modules/auth'

// 用来解决重复错误提示
let lastMessage: string | undefined

// 解决重复提示
export function handleRepeatMessage(messageContent: string, type: keyof Omit<MessageApiInjection, 'destroyAll'> = 'error') {
  console.log(messageContent === lastMessage && ServiceConstant.CLOSE_REPEAT_ERROR_MESSAGE)
  if (messageContent === lastMessage && ServiceConstant.CLOSE_REPEAT_ERROR_MESSAGE) return
  nextTick(() => {
    console.log(window.$message)
    void window.$message?.[type](messageContent, { onAfterLeave: () => lastMessage = undefined })
    lastMessage = messageContent
  })
}

// 处理axios错误
export function handleAxiosError(err: AxiosError) {
  let errorMsg: string = MessageConstant.SERVER_ERROR
  const responseContent: ResponseContent = [undefined, undefined, err.response]
  // 处理响应后的错误
  if (err.response) {
    // 请求已发出，但服务器响应的状态码错误
    const msg = ServiceConstant.STATUS_ERROR[err.response.status]
    if (msg) errorMsg = msg
    responseContent[1] = { code: err.response.status, msg: errorMsg }
  }
  else {
    // 处理请求时的错误
    const msg = ServiceConstant.AXIOS_REQUEST_ERROR[err.code as string]
    if (msg) errorMsg = msg
    responseContent[1] = { code: err.code as string, msg: errorMsg, axiosError: err }
  }

  // console.log(!err.config?.isCancelMessagePrompt)
  !err.config?.isCancelMessagePrompt && handleRepeatMessage(errorMsg)
  return responseContent
}

// 处理响应错误
export async function handleResponseError(code: number, responseContent: ResponseContent, config: AxiosRequestConfig) {
  // 是否退出登录
  const isLogOut = Object.keys(ServiceConstant.SIGN_OUT_CODE).some(key => Number(key) === code)
  if (isLogOut) {
    const authStore = useAuthStore()
    // 退出登录
    await authStore.signOut()
    !config.isCancelMessagePrompt && handleRepeatMessage(ServiceConstant.SIGN_OUT_CODE[code], 'warning')
  }
  else {
    const responseError: ResponseError = responseContent[1] as ResponseError
    !config.isCancelMessagePrompt && handleRepeatMessage(ServiceConstant.STATUS_ERROR[responseError.code] || responseError.msg || MessageConstant.SERVER_ERROR)
  }

  return responseContent
}
