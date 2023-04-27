# 覆盖 Element UI 组件方法

- 在 src/components/ElementUI/下新建组件目录，以 el-steps 为例，创建目录 Steps
- 将 node_modules/element-ui/packages/steps/src/目录下的组件拷贝到 src/components/ElementUI/Steps
- 将组件文件名改成符合我们脚手架规范的命名（大写驼峰），如 Steps.vue、Step.vue
- 修改组件，ElementUI 的 JS 格式规范与脚手架的 ESLint 有所出入，请按照脚手架的规范进行修改
- 将组件 import 到 src/components/ElementUI/index.ts
- 在 index.ts 中将组件挂在到 install 方法中，如：

```
import Steps from './Steps/Steps.vue'
import Step from './Steps/Step.vue'

export default {
  install(Vue) {
    Vue.component(Steps.name, Steps)
    Vue.component(Step.name, Step)
  }
}
```
