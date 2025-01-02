import type { ResponseContent } from '@/services/request/axios/types'
import ServiceConstant from '@/constant/service'
import Axios from '@/services/request/axios'
import { handleAxiosError, handleResponseError } from '@/services/request/utils'
import { getServicePrefixOrUrl } from '@/utils/env'

const service = new Axios<Result>({
  baseURL: getServicePrefixOrUrl('main'),
  timeout: ServiceConstant.REQUEST_TIMEOUT,
  interceptor: {
    onBeforeRequest(config) {
      if (config.headers)
        config.headers.token = 1
    },
    onResponse(response) {
      const { code, msg, result } = response.data
      const responseContent: ResponseContent<Result, typeof result> = [result, undefined, response]
      // 处理响应错误
      if (ServiceConstant.SUCCESS_CODE !== code) {
        // 错误的响应内容
        responseContent[1] = { code, msg }
        return handleResponseError(code, responseContent, response.config)
      }

      return responseContent
    },
    onResponseError(error) {
      return handleAxiosError(error)
    },
  },
})

export default service
