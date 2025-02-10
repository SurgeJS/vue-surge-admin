import definePlugin from '@/services/hooks/fetch/define-plugin.ts'
import { isBoolean } from 'es-toolkit'

const useAutoRunPlugin = definePlugin(({ rawState, run, scope, options }) => {
  const { manual = false, watchDeep, watchSource } = options
  // 首次默认调用
  if (!manual && watchSource !== true)
    void run(...rawState.params)

  scope.run(() => {
    // 依赖自动收集
    if (watchSource === true)
      watchEffect(() => {
        console.log('watch')
        void run(...rawState.params)
      })

    // 手动收集依赖
    if (!isBoolean(watchSource) && watchSource)
      watch(
        watchSource,
        () => {
          void run(...rawState.params)
        },
        {
          deep: watchDeep,
        },
      )
  })
})

export default useAutoRunPlugin
