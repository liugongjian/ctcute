import CookieStorage from './storage/CookieStorage'
import LocalStorage from './storage/LocalStorage'
import MemoryStorage from './storage/MemoryStorage'
import SessionStorage from './storage/SessionStorage'
import { AuthConfigOptions } from '../types'

export default function StorageFactory(storageType: string, options: AuthConfigOptions) {
  switch (storageType) {
    case 'localStorage':
      try {
        window.localStorage.setItem('testKey', 'test')
        window.localStorage.removeItem('testKey')
        return new LocalStorage(options.storageNamespace)
      } catch (e) {}

    case 'sessionStorage':
      try {
        window.sessionStorage.setItem('testKey', 'test')
        window.sessionStorage.removeItem('testKey')
        return new SessionStorage(options.storageNamespace)
      } catch (e) {}

    case 'cookieStorage':
      return new CookieStorage(options.cookieStorage)

    case 'memoryStorage':
    default:
      return new MemoryStorage(options.storageNamespace)
      break
  }
}
