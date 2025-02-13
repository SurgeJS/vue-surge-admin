import CoCAxios from '@/services/fetch/coc-axios'
import service from '@/services/fetch/serves/index.ts'
import { getServicePrefixOrUrl } from '@/utils/env.ts'

const fakeService = CoCAxios.extend(service, {
  baseURL: getServicePrefixOrUrl('fake'),
})

export default fakeService
