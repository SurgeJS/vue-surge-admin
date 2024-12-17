// 包装环境变量
export function wrapperMetaEnv(env?: Recordable): ImportMetaEnv {
  const metaEnv = env || import.meta.env
  return Object.keys(metaEnv).reduce((env, envKey) => {
    const envValue = metaEnv[envKey]
    try {
      env[envKey] = JSON.parse(envValue)
    }
    catch (err) {
      console.error(err)
      env[envKey] = envValue
    }
    return env
  }, {} as ImportMetaEnv)
}

// 获取服务地址
export function getServiceAddress(key: keyof ServiceConfig, apiConfig?: ServiceConfig) {
  const url = apiConfig ? apiConfig[key] : wrapperMetaEnv().VITE_SERVICE_CONFIG[key]
  if (!url) {
    console.error(`Api配置错误,未找到该api:${key}`)
    return undefined
  }
  return typeof url === 'string' ? url : url[0]
}
