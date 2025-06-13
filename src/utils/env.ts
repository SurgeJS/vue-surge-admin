// 获取包装好的环境变量

export function getMetaEnv(env?: Recordable): ImportMetaEnv {
  const metaEnv = env || import.meta.env
  return Object.keys(metaEnv).reduce((env, envKey) => {
    const envValue = metaEnv[envKey]
    try {
      env[envKey] = JSON.parse(envValue)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (err) {
      env[envKey] = envValue
    }
    return env
  }, {} as ImportMetaEnv)
}

export const VITE_SERVICE_PREFIX = 'VITE_SERVICE_'

export function getAllServiceConfig(metaEnv?: ImportMetaEnv) {
  return Object.keys(metaEnv || getMetaEnv())
    .filter(key => key.startsWith(VITE_SERVICE_PREFIX))
}

// 获取服务前缀或者服务地址
export function getServicePrefixOrUrl(server: string, metaEnv?: ImportMetaEnv) {
  const env = metaEnv || getMetaEnv()
  const key = getAllServiceConfig(env).find(key => key === `${VITE_SERVICE_PREFIX}${server}`)

  if (!key) {
    console.error(`未找到该服务配置:${VITE_SERVICE_PREFIX}${server}。请检查环境配置文件！`)
    return
  }

  const service = env[key] as (string | ProxyType)

  return typeof service === 'string' ? service : service[0]
}
