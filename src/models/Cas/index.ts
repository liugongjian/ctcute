import { CdnCas } from './CdnCas'
import { CtyunCas } from './CtyunCas'
import { CasModule } from '@/store/modules/cas'

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
 * @param containerId 框架DOM Id，用于挂载统一页面框架
 */
export const initCas = async(containerId) => {
  try {
    const container = document.querySelector(containerId)
    const cas = createCas(container)
    const auth = await cas.auth()
    if (auth.isLoggedIn) {
      cas.init()
      CasModule.SetCas(cas)
      CasModule.SetUserInfo(auth.property)
    } else {
      console.log('跳转到登录地址')
    }
  } catch (e) {
    console.log(e)
  }
}
