import Cookies from 'js-cookie'
export default Cookies

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = (): string | undefined => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string): unknown => Cookies.set(sidebarStatusKey, sidebarStatus)

// const languageKey = 'language'
// export const getLanguage = () => Cookies.get(languageKey)
// export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'vss_operation_size'
export const getSize = (): string | undefined => Cookies.get(sizeKey)
export const setSize = (size: string): unknown => Cookies.set(sizeKey, size)

// Token
const tokenKey = 'vss_operation_access_token'
export const getToken = (): string | undefined => Cookies.get(tokenKey)
export const setToken = (token: string): unknown => Cookies.set(tokenKey, token)
export const removeToken = (): unknown => Cookies.remove(tokenKey)

// Username
const username = 'vss_operation_username'
export const getUsername = (): string | undefined => Cookies.get(username)
export const setUsername = (token: string): unknown => Cookies.set(username, token)
export const removeUsername = (): unknown => Cookies.remove(username)

// iamUserId
const iamUserIdKey = 'vss_operation_iamUserId'
export const getIamUserId = (): string | undefined => Cookies.get(iamUserIdKey)
export const setIamUserId = (id: string): unknown => Cookies.set(iamUserIdKey, id)
export const removeIamUserId = (): unknown => Cookies.remove(iamUserIdKey)

// mainUserId
const mainUserIdKey = 'mainUserId'
export const getMainUserId = (): string | undefined => Cookies.get(mainUserIdKey)
export const setMainUserId = (id: string): unknown => Cookies.set(mainUserIdKey, id)
export const removeMainUserId = (): unknown => Cookies.remove(mainUserIdKey)

// ticket
export const removeTicket = (): unknown => Cookies.remove('ticket', { path: '/', domain: '.ctyun.cn' })
