import type { ResponseContent } from '@/services/request/axios/types'
import ServiceConstant from '@/constant/service'
import CreateAxios from '@/services/request/axios'
import { handleAxiosError, handleResponseError } from '@/services/request/utils'
import { getServiceAddress } from '@/utils/env'

const fakeService = new CreateAxios<Result>({
  baseURL: getServiceAddress('fake'),
  timeout: ServiceConstant.REQUEST_TIMEOUT,
  interceptor: {
    onBeforeRequest() {
    },
    onResponse(response) {
      const { code, msg, result } = response.data
      const responseContent: ResponseContent<Result> = [result, undefined, response]

      // 处理响应错误
      if (ServiceConstant.SUCCESS_CODE !== code) {
        // 错误的响应内容
        responseContent[1] = { code, msg }
        return handleResponseError(code, responseContent, response.config)
      }

      return responseContent
    },
    async onResponseError(error) {
      return handleAxiosError(error)
    },
  },
})

export default fakeService
