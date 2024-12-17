import type { ProxyOptions } from 'vite'

// 代理配置
export function proxyConfig(viteEnv: ImportMetaEnv): Recordable<string | ProxyOptions> {
  return Object.keys(viteEnv.VITE_SERVICE_CONFIG).reduce((proxy, key) => {
    if (typeof viteEnv.VITE_SERVICE_CONFIG[key] === 'string')
      return proxy
    // 前缀
    const prefix = viteEnv.VITE_SERVICE_CONFIG[key][0]
    // api地址
    const api = viteEnv.VITE_SERVICE_CONFIG[key][1]
    proxy[prefix] = {
      target: api,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
    }

    return proxy
  }, {})
}
