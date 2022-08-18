/*
 * @Author: 黄璐璐
 * @Date: 2022-07-07 15:45:48
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-17 11:22:23
 * @Description:
 */
/**
 * 判断是否是外部的URL
 * @param path string
 * @returns Boolean
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

/**
 * 判断是否是合法的URL
 * @param url URL
 * @returns Boolean
 */
export const isValidURL = (url: string): boolean => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 判断是否是数组
 * @param arg 数组
 * @returns Boolean
 */
export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * validate phone
 * @param phone
 * @returns {boolean}
 */
export const validPhone = (phone: string) => {
  const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
  return reg.test(phone)
}
