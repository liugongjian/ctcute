/* eslint-disable prefer-rest-params */
import defaultLang from './zh'

const lang = defaultLang

const i18nHandler = function () {
  const vuei18n = this.$i18n && this.$t
  if (typeof vuei18n === 'function') {
    return vuei18n.apply(this, arguments)
  }
}

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g
// 自定义解析，用 args 参数去替换
function format(string: string, ...args) {
  let _args: Record<string, any> = {}
  if (args.length === 1 && typeof args[0] === 'object') {
    _args = args[0]
  }

  if (!args || !args.hasOwnProperty) {
    _args = {}
  }

  return string.toString().replace(RE_NARGS, (match, prefix, i, index) => {
    let result

    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i
    } else {
      result = Object.prototype.hasOwnProperty.call(_args, i) ? _args[i] : null
      if (result === null || result === undefined) {
        return ''
      }

      return result
    }
  })
}

export const t = function (path: string, options?: any) {
  // 尝试用 $t 去解析
  let value = i18nHandler.apply(this, arguments)

  // 解析成功直接返回
  if (value !== null && value !== undefined) return value

  // 直接解析失败则从默认 locale 中，尝试逐层解析
  const array = path.split('.')
  let current = lang

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    // 尝试读取当前一层内容
    value = current[property]
    // 最后一层执行解析
    if (i === j - 1) return format(value, options)
    // 查无数据，则直接终止解析
    if (!value) return path
    // 继续向下一层
    current = value
  }
  return ''
}

export default t
