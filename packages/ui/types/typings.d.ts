export * from 'element-ui/types/element-ui'

import * as ElementUI from 'element-ui/types/element-ui'
export default ElementUI

declare module '*.json' {
  const value: any
  export default value
}
