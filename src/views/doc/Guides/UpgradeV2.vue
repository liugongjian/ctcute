<!--
 * @Author: 朱凌浩
 * @Date: 2023-04-19 17:01:49
 * @LastEditors: 王月功
 * @LastEditTime: 2023-05-14 17:50:09
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'Resource',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
## 升级到V2

1. 确保npm的仓库已切换到<http://verdaccio.ctcdn.cn>私库【需配置hosts 36.111.140.224 verdaccio.ctcdn.cn】
2. 安装 \`@cutedesign/ui\` 包，更新 \`@cutedesign/authenticate\` 到 \`~2.0.0\` ，删除 \`@cutedesign/base\`、\`@cutedesign/layout\`
3. 打开 \`vue.config.js\` 进行编辑
4. 将 \`pluginOptions\` 对象下的行101的 \`path.resolve(\_\_dirname, 'node\_modules/@cutedesign/theme/css/\_variables.scss')\` 替换为 \`path.resolve(\_\_dirname, 'node\_modules/@cutedesign/ui/style/themes/default/variables.scss')\`,
5. 将 \`pluginOptions\` 对象下的行102的 \`path.resolve(\_\_dirname, 'node\_modules/@cutedesign/theme/css/\_mixins.scss')\` 替换为\`path.resolve(\_\_dirname, 'node\_modules/@cutedesign/ui/style/\_mixins.scss')\`,
6. 将行121的 \`.exclude.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/theme/icons'))\` 替换为 \`.exclude.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/ui/style/icons'))\`
7. 将行127的 \`.include.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/theme/icons'))\` 替换为 \`.include.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/ui/style/icons'))\`
8. 将行71的 \`'^/ctyun/layout': '/layout'\`, 替换为 \`'^/ctyun/layout': '/console/layout'\`
9. 在74行增加 '/ctyun' 和 '^/v1/bcc' 的代理规则，详见示例代码
10. 在 Vue 工程的入口 \`main.js\` 中将 \`import CuteComponent from '@cutedesign/base'\` 替换为 \`import CuteComponent from '@cutedesign/ui'；\`同时引入样式 \`import '@cutedesign/ui/lib/index.css'\`
11. 对接 iam 或 ctyun 的项目，需要在 \`main.js\` 中初始化对应 layout ，详见实例代码
12. 如在 Vue 组件中引用过 SASS 变量，需要替换引用路径，将 \`@cutedesign/theme/css/\_variables.scss\` 替换为 \`@cutedesign/ui/style/themes/default/index.scss\`
13. 替换 \`App.vue\` 代码，使用 cute-layout ，详见下面示例代码
14. 替换 \`router\` 中的 \`Layout\` 组件为容器组件，详见下面示例代码
15. 替换 \`i18n\` 中的 index.ts ，使用 ui 包内置的 \`createI18n\` 方法初始化，详见下面示例代码（由于 element-ui 的语言包已内置处理，同目录下的 zh.ts 和 en.ts 中 el 相关配置需要清除）

### 上述步骤4-9的vue.config.js示例代码：

\`\`\`js
...
module.exports = {
  ...,
  devServer: {
    proxy: {
      // ctyun 静态资源
      '/ctyun/layout': {
        target: CTYUN_URL,
        https: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/ctyun/layout': '/console/layout',
        },
      },
      '/ctyun': {
        target: CTYUN_URL,
        https: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/ctyun': '/',
        },
      },
      // ctyun 接口，用户信息、菜单
      '^/gw': {
        target: CTYUN_URL,
        https: true,
        changeOrigin: true,
        secure: false,
      },
      // ctyun layout 依赖服务
      '^/v1/bcc': {
        target: CTYUN_URL,
        https: true,
        changeOrigin: true,
        secure: false,
      },
      // 业务接口+登录接口，以cdn为例
      '/cdn': {
        target: SVR_URL,
        https: true,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/themes/default/variables.scss'),
        path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/_mixins.scss'),
        path.resolve(__dirname, 'src/assets/css/_variables.scss'),
      ],
    },
  },
  ...
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|fill-rule)',
            },
          },
        ],
      })
      .end()
    ...
    },
}
\`\`\`

### 上述步骤11的 main.js 代码：

更多使用参数详见 \`@cutedesign/authenticate\` README。

\`\`\`js
import { IamLayout, CtyunLayout } from '@cutedesign/authenticate'

new IamLayout()
  .init({
    bizDomain: 'cdn', // 侧边栏高亮，取值为 /iam/gw/workspace/console/List 中本控制台的 domain
  })
  .then(() => {
    new Vue({
      // i18n, // 按需开启
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  })

new CtyunLayout()
  .init({
    bizDomain: 'console.cdn', // 侧边栏高亮，取值为 /GetTree?domain=console.leftbar.v2 中本控制台的 menuCode
    logoutUrl: '/cdn/sign/out', // 按需重写
  })
  .then(() => {
    new Vue({
      // i18n, // 按需开启
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  })
\`\`\`

### 上述步骤13的 App.vue 代码：

\`\`\`vue
<template>
  <cute-layout
    :header="false"
    :navbar="!fullScreen"
    :sidebar="!fullScreen"
    :sidebar-title="sidebarTitle"
    :sidebar-routes="currentRoutes"
  >
    <router-view />
  </cute-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App',
})
export default class extends Vue {
  private sidebarTitle = '页面规范'
  private currentRoutes = []

  private get fullScreen() {
    return this.$route.meta.fullscreen
  }

  private mounted() {
    this.getCurrentRoutes()
  }

  private getCurrentRoutes() {
    this.currentRoutes = this.$auth?.getRoutes() || []
  }
}
<\/script>
\`\`\`

### 上述步骤14容器组件示例代码：

\`\`\`js
<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ContentWrap',
})
export default class extends Vue {}
<\/script>
\`\`\`

### 上述步骤15 i18n 初始化示例代码：

\`\`\`js
import { createI18n } from '@cutedesign/ui'
import zh from './zh'
import en from './en'

const i18n = createI18n({
  storageKey: 'cute-lang', // 本地持久化时的 localStorage key
  defaultLang: 'zh', // 默认展示的语言
})

i18n.mergeLocaleMessage('zh', zh)
i18n.mergeLocaleMessage('en', en)

export default i18n

\`\`\`
`
}
</script>
