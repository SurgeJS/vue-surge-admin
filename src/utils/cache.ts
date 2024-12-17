import store from 'store2'
import Cookies from 'universal-cookie'

// 缓存类型
export type CacheType = 'local' | 'session' | 'cookie'

// 缓存模板
export interface CacheTemplate<T> {
  // 缓存名称
  key: string

  /**
   * 设置缓存
   * @param value 缓存的值
   * @param expires 过期时间，缓存类型为 Cookie 的时候有效
   */
  set: (value: T, expires?: Date) => void

  // 获取缓存
  get: () => T | null

  // 删除缓存
  remove: () => void

  // 是否存在
  isExist: () => boolean
}

/**
 * 创建缓存
 * @param key 换成名称
 * @param type 缓存类型,默认是local
 */
export function createCache<T>(key: string, type: CacheType = 'local'): CacheTemplate<T> {
  const cookies = new Cookies()
  return {
    key,
    set(value, expires?) {
      switch (type) {
        case 'local':
          store.set(key, value)
          break
        case 'session':
          store.session.set(key, value)
          break
        case 'cookie':
          cookies.set(key, value, { expires })
      }
    },
    get() {
      switch (type) {
        case 'local':
          return store.get(key)
        case 'session':
          return store.session.get(key)
        case 'cookie':
          return cookies.get(key)
      }
    },
    remove() {
      switch (type) {
        case 'local':
          return store.remove(key)
        case 'session':
          return store.session.remove(key)
        case 'cookie':
          return cookies.remove(key)
      }
    },
    isExist() {
      switch (type) {
        case 'local':
          return store.has(key)
        case 'session':
          return store.session.has(key)
        case 'cookie':
          return Boolean(cookies.get(key))
      }
    },
  }
}
