import { CdnCas } from './CdnCas'
import { CtyunCas } from './CtyunCas'

const type: any = 'cdn'

/**
 * 创建Cas
 * @param container 框架DOM，用于挂载统一页面框架
 * @returns Cas
 */
const createCas = (container) => {
  switch (type) {
    case 'cdn':
      return new CdnCas(container)
    case 'ctyun':
      return new CtyunCas(container)
  }
}

/**
 * 初始化Cas
 * @param container 框架DOM，用于挂载统一页面框架
 */
export const initCas = async(container) => {
  const cas = createCas(container)
  const auth = await cas.auth()
  if (auth.isLoggedIn) {
    cas.init()
    cas.updateMenu()
  }
}
