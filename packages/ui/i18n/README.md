# @cutedesign/ui 内置 i18n 说明

## 1、ui 包内开发

由于 ui 包实现了一些业务组件和部分 element-ui 组件的定制开发，为了支持国际化，需要在 ui 包内对齐进行多语言支持。

所需的 locale 文件统一放在 `./i18n` 目录下进行管理，文件组织方式如下：

```
i18n
├── README.md
├── index.ts // 主入口
├── zh // 中文配置
│   ├── index.ts
│   └── ... // 各 locale 文件
└── en // 英文配置
    ├── common.js
    └── ... // 各 locale 文件
```

### 1.1 组件 ts 开发

```vue
<template>
  <div>{{ t('cute.editInput.placeholder') }}</div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteEditInput',
})
export default class extends Mixins(Locale) {
  test() {
    console.log(this.t('cute.editInput.placeholder'))
  }
}
</script>
```

#### 1.2 组件 js 开发

引用另一个 locale 文件。

```vue
<script>
import Locale from '@cutedesign/ui/mixins/localeJs'

export default {
  mixins: [Locale],
}
</script>
```

### 1.3 组件 prop 默认值

如果是设置 `prop` 的默认值，为了支持实时切换语言，建议不使用 default 设置，而是在逻辑中赋值。

### 1.4 重写 element-ui 组件

如果是重写 element-ui 组件，需要注意 local 引用 `lib` 目录下，src 目录会产生实例隔离：

```vue
<script type="text/babel">
import Locale from 'element-ui/lib/mixins/locale'

export default {
  mixins: [Locale],
}
</script>
```

## 2、项目内使用

### 2.1 安装依赖

需求 vue-i18n 8+ 版本。

```cmd
npm i -S vue-i18n@^8.0.0
```

### 2.2 初始化 i18n

`src/i18n/index.ts`，在这里初始化 i18n 实例，并合并项目内的 locale 配置：

```js
import { createI18n } from '@cutedesign/ui'

const i18n = createI18n({
  // storageKey: 'lang', // 本地持久化时的 localeStorage key，默认 lang
  // defaultLang: 'zh', // 默认展示的语言，默认 zh
})

// 扩展 locale
i18n.mergeLocaleMessage('zh', zh)
i18n.mergeLocaleMessage('en', en)

export default i18n
```

### 2.3 初始化 Vue

`src/main.ts` 用法照旧：

```js
import i18n from '@/i18n'

new Vue({ i18n })
```

## 3、英文翻译规范

（待补充）
