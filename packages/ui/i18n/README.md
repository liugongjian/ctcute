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

## 2、项目内使用

1. 安装所需的依赖：

需求 vue-i18n 8+ 版本。

```cmd
npm i -S vue-i18n@^8.0.0
```

2. `src/i18n/index.ts`，在这里初始化 i18n 实例，并合并项目内的 locale 配置：

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

3. `src/main.ts` 用法照旧：

```js
import i18n from '@/i18n'

new Vue({ i18n })
```
