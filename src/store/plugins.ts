import type { PiniaPluginContext } from 'pinia'
import { cloneDeep } from 'es-toolkit'

function storeResetPlugin(context: PiniaPluginContext) {
  const { $state } = context.store
  context.store.$reset = () => {
    context.store.$patch(cloneDeep($state))
  }
}

export default [storeResetPlugin]
