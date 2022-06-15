# 覆盖Element UI 组件方法
- 在src/components/ElementUI/下新建组件目录，以el-steps为例，创建目录Steps
- 将node_modules/element-ui/packages/steps/src/目录下的组件拷贝到src/components/ElementUI/Steps
- 将组件文件名改成符合我们脚手架规范的命名（大写驼峰），如Steps.vue、Step.vue
- 修改组件，ElementUI的JS格式规范与脚手架的ESLint有所出入，请按照脚手架的规范进行修改
- 将组件import到src/components/ElementUI/index.ts
- 在index.ts中将组件挂在到install方法中，如：
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