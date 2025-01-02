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

// 获取服务前缀或者服务地址
export function getServicePrefixOrUrl(key: keyof ServiceConfig, apiConfig?: ServiceConfig) {
  const url = apiConfig ? apiConfig[key] : getMetaEnv().VITE_SERVICE_CONFIG[key]
  if (!url) {
    console.error(`Api配置错误,未找到该api:${key}`)
    return undefined
  }
  return typeof url === 'string' ? url : url[0]
}
