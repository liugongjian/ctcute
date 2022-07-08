# vue-svgicon 对比 svg-sprite-loader + svgo-loader

- 添加新 svg 文件，vue-svgicon 需要运行命令重新生成 svg component，后者不需要，编译时自动扫描生成
- svg-sprite-loader 会把你引入的 svg 塞到一个个 symbol 中，合成一个大的 svg，最后将这个大的 svg 放入 body 中；vue-svgicon 不是

## 使用

- name: 匹配 icon
- class-name: 自定义 class
- color: 设置颜色
- width: 设置宽度
- height: 设置高度
- verticalAlign: 设置 verticalAlign

<svg-icon name="api" />
