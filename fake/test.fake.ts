import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { generatePagedData, rSuccess } from './utils'

export default defineFakeRoute([
  {
    url: '/getTodos',
    method: 'post',
    timeout: 1000,
    response: (processedRequest) => {
      const { pageSize, page } = processedRequest.body

      return rSuccess(generatePagedData(page, pageSize, 542))
    },
  },
])
