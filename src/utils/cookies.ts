import Cookies from 'js-cookie'
export default Cookies

// Token
const tokenKey = 'access_token'
export const getToken = (): string | undefined => Cookies.get(tokenKey)
export const setToken = (token: string): unknown => Cookies.set(tokenKey, token)
export const removeToken = (): unknown => Cookies.remove(tokenKey)
