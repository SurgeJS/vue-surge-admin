import { NormAxios } from 'norm-axios'
import service from '@/services/request/index.ts'
import { getServicePrefixOrUrl } from '@/utils/env.ts'

const fakeService = NormAxios.extend(service, {
  baseURL: getServicePrefixOrUrl('FAKE'),
})

export default fakeService
