# vue-svgicon 对比 svg-sprite-loader + svgo-loader

* 添加新svg文件，vue-svgicon需要运行命令重新生成svg component，后者不需要，编译时自动扫描生成
* svg-sprite-loader会把你引入的 svg 塞到一个个 symbol 中，合成一个大的 svg，最后将这个大的 svg 放入 body 中；vue-svgicon不是

## 使用

* name: 匹配icon
* class-name: 自定义class
* color: 设置颜色
* width: 设置宽度
* height: 设置高度
* verticalAlign: 设置verticalAlign

<svg-icon name="api" />
