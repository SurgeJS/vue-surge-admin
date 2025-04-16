import service from '@/services/serves/index.ts'
import { getServicePrefixOrUrl } from '@/utils/env.ts'
import { NormAxios } from 'norm-axios'

const fakeService = NormAxios.extend(service, {
  baseURL: getServicePrefixOrUrl('fake'),
})

export default fakeService
