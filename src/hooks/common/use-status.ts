import type { Reactive } from 'vue'
import { cloneDeep } from 'es-toolkit'
import { isReactive, reactive } from 'vue'

function useStatus<T extends Recordable = Recordable>(status: Reactive<T> | T) {
  const sta = isReactive(status) ? status : reactive(status)
  const initialStatus = cloneDeep(sta)

  const setStatus = <K extends keyof T>(key: K, value: T[K]) => {
    sta[key as keyof typeof sta] = value
  }

  const getStatus = <K extends keyof T>(key: K) => sta[key as keyof typeof sta]

  const resetStatus = () => {
    for (const key in initialStatus)
      sta[key] = initialStatus[key]
  }
  return { status, setStatus, getStatus, resetStatus }
}
export default useStatus
