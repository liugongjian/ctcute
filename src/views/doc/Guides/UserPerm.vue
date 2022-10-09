<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 08:54:46
 * @Description: 用户权限
-->

<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'UserPerm',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 用户权限

> 若对接用户权限遇到问题，请在企业微信联系胡佳婷和王月功

用户权限几乎是所有后台管理系统必备的功能，我们通过统一的\`@cutedesign/authenticate\`提供了如下三种对接方式。
### a) 天翼云
通过脚手架初始化项目时，选择用户类型为"天翼云用户"。在\`public/config/index.js\`中，初始化的选项如下：
\`\`\`
window.commonConfig = {
  authConfig: {
    authenticateType: 'ctyun',
    enableAuthorize: false, // ctyun 暂无权限要求
    baseUrl: '/cdn',

    providers: {
      ctyun: {
        layout: {
          bizDomain: '442212408854089728', // 取值为 GetTree?domain=console.leftbar 中本控制台的 menuId
        },
      },
    },
  },
}
\`\`\`
其中，\`authenticateType\`指定了用户类型，无需改变；\`enableAuthorize\`指定了是否开启权限，一般对接天翼云的系统不需要权限；\`baseUrl\`为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

\`providers\`可以定义每一种用户权限的自定义字段，对天翼云用户来说，需要在\`ctyun\`对象中定义。
如果您的产品需要上云，并且在云网门户有正式的入口（需要您的产品在上云的时候找IT对接），则需要定义\`layout->bizDomain\`字段，这个字段的值可以从\`GetTree?domain=console.leftbar\`中确认
全量的可配置字段，可参考[@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

### b) IAM
>[IAM的介绍](https://vip.ctcdn.cn/help/10002240?workspaceId=0)

通过脚手架初始化项目时，选择用户类型为"IAM用户"。在\`public/config/index.js\`中，初始化的选项如下：
\`\`\`
window.commonConfig = {
  authConfig: {
    authenticateType: 'iam', // 使用 iam 登录
    enableAuthorize: true, // 启动权限控制
    baseUrl: 'cdn', // 业务前缀，以 cdn 为例

    providers: {
      iam: {
        layout: {
          bizDomain: 'cdn', // layout 头部菜单当前服务在 osp 中的 domain 前缀，以 cdn 为例，实际请求的 cdn.header 和 cdn.header.dropdown
        },
        perms: {
          domain: 'new.cdn.main', // 业务权限列表在 osp 中的菜单代码，按需语义化定义，以 cdn 为例
        },
      },
      ctyun: {
        layout: {
          // containerId: 'container', // bs 重写该 id 阻塞 layout 渲染
          // bizDomain: '442212408854089728', // 取值为 GetTree?domain=console.leftbar 中本控制台的 menuId
        },
      },
    },
  },
}
\`\`\`
其中，\`authenticateType\`指定了用户类型；\`enableAuthorize\`指定了是否开启权限，根据实际业务需求按需开启；\`baseUrl\`为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

\`providers\`可以定义每一种用户权限的自定义字段，这里常见的有两种场景：
#### 场景1：只对接IAM本身
定义\`iam\`对象，通常来说，您只需要覆盖\`layout->bizDomain\`和\`perms->domain\`两个字段的值。其中\`layout->bizDomain\`是您的业务在\`iam的osp\`系统中定义的头部菜单前缀，\`perms->domain\`是您的业务在\`iam的osp\`系统中定义的菜单代码前缀


#### 场景2：同时对接IAM、ctyun和bs
IAM的配置说明见场景1，bs与ctyun类似，但不渲染相关的layout，所以请覆盖\`ctyun->layout\`下的\`containerId\`字段，以阻塞layout渲染

全量的可配置字段，可参考[@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

### c) 自建用户
通过脚手架初始化项目时，选择用户类型为"自建用户"。在\`public/config/index.js\`中，初始化的选项如下：
\`\`\`
window.commonConfig = {
  authConfig: {
    authenticateType: 'local', // 使用 自建用户 登录
    enableAuthorize: true, // 启动权限控制
    baseUrl: 'http://fed.ctyuncdn.cn:8088',

    providers: {
      local: {},
    },
  },
}
\`\`\`
其中，\`authenticateType\`指定了用户类型，无需改变；\`enableAuthorize\`指定了是否开启权限，一般自建用户默认开启权限；\`baseUrl\`为业务前缀，您需要根据自己的后端接口进行调整，这边只是示例，大部分情况不会与您相同。

\`providers\`可以定义每一种用户权限的自定义字段，对自建用户来说，需要在\`local\`对象中定义。
默认定义了四个接口，若您的接口不一致，请重写对应的配置，但需要提供同等功能的接口：
1. 判断用户是否登录（/v1/auth/account/ifLogin）【在\`providers->local->ifLogin->url\`字段配置】
2. 登录（/v1/auth/login）【在\`loginUrl\`字段配置】
3. 退出（/v1/auth/logout）【在\`logoutUrl\`字段配置】
4. 获取用户菜单按钮权限（/v1/auth/account/menus）【在\`providers->local->perms->url\`字段配置】
全量的可配置字段，可参考[@cutedesign/authenticate](http://verdaccio.ctcdn.cn/-/web/detail/@cutedesign/authenticate)

对于自建用户权限，我们提供了一整套页面，包括登录页、头部用户信息展示（包括退出）、用户管理页、角色管理页、菜单管理页。您可以在此基础上进行修改。相关的接口文档可参考[自建用户接口文档](https://cloud.ctcdn.cn/s/kYcJi9wj8ocwk7m)
`
}
</script>
