import Axios from '@/services/fetch/axios'
import service from '@/services/fetch/serves/index.ts'
import { getServicePrefixOrUrl } from '@/utils/env.ts'

const fakeService = Axios.extend(service, {
  baseURL: getServicePrefixOrUrl('fake'),
})

export default fakeService
