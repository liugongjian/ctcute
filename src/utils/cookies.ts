import Cookies from 'js-cookie'
export default Cookies

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = (): string | undefined => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string): unknown => Cookies.set(sidebarStatusKey, sidebarStatus)

// const languageKey = 'language'
// export const getLanguage = () => Cookies.get(languageKey)
// export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = (): string | undefined => Cookies.get(sizeKey)
export const setSize = (size: string): unknown => Cookies.set(sizeKey, size)

// Token
const tokenKey = 'access_token'
export const getToken = (): string | undefined => Cookies.get(tokenKey)
export const setToken = (token: string): unknown => Cookies.set(tokenKey, token)
export const removeToken = (): unknown => Cookies.remove(tokenKey)
