import Axios from '@/services/request/axios'
import service from '@/services/request/serves/index.ts'
import { getServicePrefixOrUrl } from '@/utils/env.ts'

const fakeService = Axios.extend(service, {
  baseURL: getServicePrefixOrUrl('fake'),
})

export default fakeService
