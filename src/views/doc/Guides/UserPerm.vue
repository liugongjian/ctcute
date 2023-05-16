<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 王月功
 * @LastEditTime: 2023-05-16 09:08:37
 * @Description: 用户权限
-->

<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'UserPerm',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
[[toc]]

## 用户权限

> 若对接用户权限遇到问题，请在企业微信联系胡佳婷和王月功

> 针对单点登录的说明：在我们的方案中，单点登录是后端实现的，前端调用登录接口如 \`/cdn/sign/in\`，是后端的一个服务，相关信息是通过 cookie 携带。在这个单点登录过程中，前端就做了一步访问登录接口的操作。在这个过程中，如果判断为未登录，后端携带相关信息会302到登录页（跳出自己的后端服务）。如果是已登录后的超时，表现为进入系统一段时间后，调用任一业务服务，后端判断未登录后，返回约定的错误码，前端主动跳转登录接口如 \`/cdn/sign/in\`，重新走一遍登录流程

用户权限几乎是所有后台管理系统必备的功能，我们通过统一的 \`@cutedesign/authenticate\` 提供了常用对接方式。使用说明如下：

\`\`\`js
// main.ts
import router, { routes } from './router'
import http from '@/utils/request'
import CuteAuthenticate from '@cutedesign/authenticate'

Vue.use(CuteAuthenticate, {
  ...JSON.parse(JSON.stringify(window.commonConfig.authConfig)),
  router,
  routes,
  http,
})
\`\`\`

其中 commonConfig 在 \`public/config/index.js\` 中进行声明。

### 一、天翼云

通过脚手架初始化项目时，选择用户类型为 **"天翼云用户"**。在 \`public/config/index.js\` 中，初始化的选项如下：

\`\`\`js
window.commonConfig = {
  authConfig: {
    authenticateType: 'ctyun',
    enableAuthorize: false, // ctyun 暂无权限要求
    baseUrl: '/cdn',

    providers: {
      ctyun: {},
    },
  },
}
\`\`\`

其中，\`authenticateType\` 指定了用户类型，无需改变；\`enableAuthorize\` 指定了是否开启权限，一般对接天翼云的系统不需要权限；\`baseUrl\`为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

\`providers\` 可以定义每一种用户权限的自定义字段，对天翼云用户来说，需要在 \`ctyun\` 对象中定义。全量的可配置字段，可参考 [@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

> 注意：需配置 \`hosts: 127.0.0.1 local.ctyun.cn\` ，并使用 \`npm run serve:ctyun\` 启动

对接天翼云时，需要使用其提供的 CtyunLayout ，\`@cutedesign/authenticate\` 提供了便捷的使用方法，示例如下：

\`\`\`js
import { CtyunLayout } from '@cutedesign/authenticate'

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

### 二、IAM

>[IAM的介绍](https://vip.ctcdn.cn/help/10002240?workspaceId=0)

通过脚手架初始化项目时，选择用户类型为 **"IAM用户"**。在 \`public/config/index.js\` 中，初始化的选项如下：

\`\`\`js
window.commonConfig = {
  authConfig: {
    authenticateType: 'iam', // 使用 iam 登录
    enableAuthorize: true, // 启动权限控制
    baseUrl: 'cdn', // 业务前缀，以 cdn 为例

    providers: {
      iam: {
        perms: {
          domain: 'new.cdn.main', // 业务权限列表在 osp 中的菜单代码，按需语义化定义，以 cdn 为例
        },
      },
    },
  },
}
\`\`\`

其中， \`authenticateType\` 指定了用户类型； \`enableAuthorize\` 指定了是否开启权限，根据实际业务需求按需开启； \`baseUrl\` 为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

全量的可配置字段，可参考 [@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

对接 IAM 时，需要使用其提供的 IamLayout ，\`@cutedesign/authenticate\` 提供了便捷的使用方法，示例如下：

\`\`\`js
import { IamLayout } from '@cutedesign/authenticate'

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
\`\`\`

\`providers\` 可以定义每一种用户权限的自定义字段，这里常见的有两种场景：

#### 2.1 场景1：只对接IAM本身

定义 \`iam\` 对象，通常来说，您只需要覆盖 \`perms->domain\` 字段的值，该值是您的业务在 \`iam的osp\` 系统中定义的菜单代码。

#### 2.2 场景2：同时对接 IAM、ctyun和bs

ctyun 的配置说明见 \`一、天翼云\`，IAM 的配置说明见 \`二、IAM\` ，不再赘述。bs与ctyun类似，但不渲染需要初始化 CtyunLayout。

#### 2.3 一份镜像多份配置的方案

由于业务逻辑几近相同，只是对接权限配置有所差异，因此使用 \`一份镜像+ configmap\` 的方式按需配置 \`public/config/index.js\` 来降低维护成本。

1. 创建 configmap
  - 方式1：\`kubectl -n xxx create configmap demoweb-env --from-file=config/index.js\`
  - 方式2：使用脚手架创建项目，选择 IAM 用户类型时，已经默认提供，在 \`deploy/**/configmap.yaml\` 中（各场景独立配置）
2. 在 deployment.yaml 挂在对应文件
  - 方式1：\`kubectl -n xxx create configmap demoweb-nginx --from-file=nginx.conf\`
  - 方式2：使用脚手架创建项目，选择 IAM 用户类型时，已经默认提供，在 \`deploy/base/deploy.yaml\` 中（各场景共享配置）

> 注意：需配置 hosts : \`127.0.0.1 local.ctcdn.cn\`，并使用 \`npm run serve:iam\` 启动

### 三、cuted内置用户

通过脚手架初始化项目时，选择用户类型为"cuted内置用户"。在\`public/config/index.js\`中，初始化的选项如下：

\`\`\`js
window.commonConfig = {
  authConfig: {
    authenticateType: 'local', // 使用 cuted内置用户 登录
    enableAuthorize: true, // 启动权限控制
    baseUrl: 'http://fed.ctyuncdn.cn:8088',

    providers: {
      local: {},
    },
  },
}
\`\`\`

其中，\`authenticateType\` 指定了用户类型，无需改变；\`enableAuthorize\` 指定了是否开启权限，一般cuted默认开启权限；\`baseUrl\` 为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

\`providers\` 可以定义每一种用户权限的自定义字段，对 cuted 内置用户来说，需要在 \`local\` 对象中定义。

默认定义了四个接口，若您的接口不一致，请重写对应的配置，但需要提供同等功能的接口：

1. 判断用户是否登录（/v1/auth/account/ifLogin）【在\`providers->local->ifLogin->url\`字段配置】
2. 登录（/v1/auth/login）【在\`loginUrl\`字段配置】
3. 退出（/v1/auth/logout）【在\`logoutUrl\`字段配置】
4. 获取用户菜单按钮权限（/v1/auth/account/menus）【在\`providers->local->perms->url\`字段配置】

全量的可配置字段，可参考 [@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

对于cuted内置用户权限，我们提供了一整套页面，包括登录页、头部用户信息展示（包括退出）、用户管理页、角色管理页、菜单管理页。您可以在此基础上进行修改。相关的接口文档可参考 [cuted内置用户接口文档](https://cloud.ctcdn.cn/s/kYcJi9wj8ocwk7m)
`
}
</script>
