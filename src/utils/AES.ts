/*
 * @Author: 马妍
 * @Date: 2022-08-15 17:06:41
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-16 16:52:14
 * @Description:
 */
import CryptoJs from 'crypto-js'

// AES加密
export const encryptAes = message => {
  const options = {
    iv: CryptoJs.enc.Utf8.parse('abcdef0abcdef0123456789123456789'),
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  }
  return CryptoJs.AES.encrypt(message, '@node-king!', options).toString()
}
