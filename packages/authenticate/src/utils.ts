export function camelCase(name) {
  return name.replace(/([\:\-\_]+(.))/g, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  })
}

export function isUndefined(value) {
  return typeof value === 'undefined'
}

export function isDefined(value) {
  return typeof value !== 'undefined'
}

export function isObject(value) {
  return value !== null && typeof value === 'object'
}

export function isString(value) {
  return typeof value === 'string'
}

export function isNumber(value) {
  return typeof value === 'number'
}

export function isFunction(value) {
  return typeof value === 'function'
}

export function objectExtend(a, b) {
  // Don't touch 'null' or 'undefined' objects.
  if (a == null || b == null) {
    return a
  }

  Object.keys(b).forEach(function (key) {
    if (Object.prototype.toString.call(b[key]) == '[object Object]') {
      if (Object.prototype.toString.call(a[key]) != '[object Object]') {
        a[key] = b[key]
      } else {
        a[key] = objectExtend(a[key], b[key])
      }
    } else {
      a[key] = b[key]
    }
  })

  return a
}

/**
 * Assemble url from two segments
 *
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 *
 * @param  {String} baseUrl Base url
 * @param  {String} url     URI
 * @return {String}
 */
export function joinUrl(baseUrl, url) {
  if (/^(?:[a-z]+:)?\/\//i.test(url)) {
    return url
  }
  const joined = [baseUrl, url].join('/')
  const normalize = function (str) {
    return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/\#/g, '#').replace(/\:\//g, '://')
  }
  return normalize(joined)
}

/**
 * Get full path based on current location
 *
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 *
 * @param  {Location} location
 * @return {String}
 */
export function getFullUrlPath(location) {
  const isHttps = location.protocol === 'https:'
  return (
    location.protocol +
    '//' +
    location.hostname +
    ':' +
    (location.port || (isHttps ? '443' : '80')) +
    (/^\//.test(location.pathname) ? location.pathname : '/' + location.pathname)
  )
}

/**
 * Parse query string variables
 *
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 *
 * @param  {String} Query string
 * @return {String}
 */
export function parseQueryString(str) {
  const obj = {}
  let key
  let value
    ; (str || '').split('&').forEach(keyValue => {
      if (keyValue) {
        value = keyValue.split('=')
        key = decodeURIComponent(value[0])
        obj[key] = !!value[1] ? decodeURIComponent(value[1]) : true
      }
    })
  return obj
}

export function parseCookies(str = '') {
  if (str.length === 0) return {}
  const parsed = {}
  const pattern = new RegExp('\\s*;\\s*')
  str.split(pattern).forEach(i => {
    const [encodedKey, encodedValue] = i.split('=')
    const key = decodeURIComponent(encodedKey)
    const value = decodeURIComponent(encodedValue)
    parsed[key] = value
  })
  return parsed
}

export function formatOptions(options) {
  const { path, domain, expires, secure } = options
  return [
    typeof path === 'undefined' || path === null ? '' : ';path=' + path,
    typeof domain === 'undefined' || domain === null ? '' : ';domain=' + domain,
    typeof expires === 'undefined' || expires === null ? '' : ';expires=' + expires.toUTCString(),
    typeof secure === 'undefined' || secure === null || secure === false ? '' : ';secure',
  ].join('')
}

export function formatCookie(key, value, options) {
  return [encodeURIComponent(key), '=', encodeURIComponent(value), formatOptions(options)].join('')
}

export function getObjectProperty(objectRef, propertyName) {
  let value = undefined
  let valueRef = objectRef
  const propNames = propertyName.split('.')

  for (let i = 0; i < propNames.length; i++) {
    const key = propNames[i]
    value = valueRef[key]

    if (isObject(value)) {
      valueRef = valueRef[key]
    } else {
      break
    }
  }

  return value
}

export function loadJs(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject(new Error(`${src}，js加载失败`))
    }
  })
}

export function loadCss(href: string) {
  return new Promise<void>((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    document.body.appendChild(link)
    link.onload = () => {
      resolve()
    }
    link.onerror = () => {
      reject(new Error(`${href}，css加载失败`))
    }
  })
}
