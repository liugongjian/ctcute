// 判断是否为 Object
export const isObject = (obj: any): obj is Record<string, string> =>
  Object.prototype.toString.call(obj) === '[object Object]'

// 动态加载 js 脚本
export const loadJs = (url: string) => {
  if (!url) {
    return Promise.reject('缺少目标 url')
  }

  return new Promise((resolve, reject) => {
    const body = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    body.appendChild(script)

    script.addEventListener('load', function () {
      resolve(`${url} 加载成功`)
    })
    script.addEventListener('error', function () {
      reject(`${url} 加载失败`)
    })
  })
}

// 动态加载 ccs 脚本
export const loadCss = (url: string) => {
  if (!url) {
    return Promise.reject('缺少目标 url')
  }

  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    head.appendChild(link)

    link.addEventListener('load', function () {
      resolve(`${url} 加载成功`)
    })
    link.addEventListener('error', function () {
      reject(`${url} 加载失败`)
    })
  })
}

// 递归拍平对象数组
export const flatObjectArray = <T>(arr: Array<T> = [], childrenKey = 'children'): Array<T> => {
  if (!Array.isArray(arr)) return []

  return arr
    .map(item => {
      let children: Array<T> = []

      if (item[childrenKey]) {
        children = flatObjectArray(item[childrenKey], childrenKey)
      }

      return [item, ...children]
    })
    .flat()
}
