## 背景

后台管理系统一般都会用到用户权限，无论是自建的用户权限体系，还是对接第三方用户权限系统，对每个项目来说都是重要但重复的工作。 @cutedesign/authenticate 集成了研发三部常用的用户权限体系，使业务方只需关心业务本身，无需重复建设。

## 简介

@cutedesign/authenticate 包括两部分，一部分是用户、一部分是权限。
其中用户部分支持三种模式：

- 自建用户(local)
- 天翼云用户(ctyun)
- IAM 用户(iam)

权限部分支持两种模式：

- 自建权限(local)
- IAM 权限(iam)

用户的模式和权限的模式可灵活组合，也可只接入用户体系不接入权限。根据实际的业务场景，我们支持的所有场景包括：

- 只接入用户(enableAuthorize:false)
  - 自建用户(authenticateType:'local')
  - 天翼云用户(authenticateType:'ctyun')
  - IAM 用户(authenticateType:'iam')
- 同时接入用户和权限(enableAuthorize:true)
  - 自建用户(authenticateType:'local')+自建权限(authorizeType:'local')
  - 天翼云用户(authenticateType:'ctyun')+自建权限(authorizeType:'local')
  - IAM 用户(authenticateType:'iam')+自建权限(authorizeType:'local')
  - IAM 用户(authenticateType:'iam')+IAM 权限(authorizeType:'iam')

## 使用

1. 安装依赖`yarn add @cutedesign/authenticate`
2. 在入口文件安装插件(通常是`main.ts`)

```javascript
import router, { routes } from './router'
import http from '@/utils/request'
import CuteAuthenticate from '@cutedesign/authenticate'
Vue.use(CuteAuthenticate, {
  baseUrl?: 'xxx', // 后端接口的基础路径，默认是null
  authenticateType?: 'local' | 'ctyun' | 'iam',  // 默认是'local'
  enableAuthorize?: true | false,  // 默认是false
  authorizeType?: 'local' | 'iam', // 默认是iam
  router,  // vue-router的实例
  routes,  // 全量的routes，如果需要接入权限，则必传。与权限相关的字段在后面会有具体说明
  http,   // axios实例，脚手架中即为@/utils/request文件导出的对象
  ...    // 其他配置具体参考下面全量配置
})
```

3. 在`Vue`实例中，可以通过`this.$auth`获取到该插件实例。可使用属性包括

```javascript
 // 用户信息
this.$auth.userInfo:{
  userId: 'xx', // 用户id
  name: 'xx'    // 用户名
}

// 是否已登录
this.$auth.isLogin
```

4. 按钮权限通过`v-permission`指令实现，举例如下：

```javascript
<el-button v-permission="['/permission/user/:add']">+ 新增按钮</el-button>
```

其中`'/permission/user/:add'`是配置的按钮 code

## 配置项

```javascript
export default {
  baseUrl: null, // 后端接口的基础路径
  tokenName: 'token', // 自建用户体系token的名字
  tokenPrefix: 'vueauth', // 自建用户体系token的前缀
  tokenHeader: 'Authorization', // 自建用户体系接口中传的tokenHeader字段名
  tokenType: null, // 自建用户体系token类型，常用的是'Bear'
  loginUrl: '/v1/auth/login', // 自建用户体系登录接口
  logoutUrl: '/v1/auth/logout', // 自建用户体系退出接口
  storageNamespace: 'vue-authenticate', // 内部存储的namespace
  cookieStorage: {
    // 内部存储cookie的一些参数
    domain: getCookieDomainUrl(),
    path: '/',
    secure: false,
  },
  withCredentials: true, // 请求接口的时候是否带上cookie
  requestDataKey: 'data', // 请求的key
  responseDataKey: 'data', // 响应的key
  authenticateType: 'local', // 需要集成的用户类型
  containerId: '#container', // 入口DOM的id，在app外层
  enableAuthorize: false, // 是否需要集成权限
  authorizeType: 'local', // 需要集成的权限类型

  // axios的请求过滤器
  bindRequestInterceptor: function ($auth) {
    if ($auth.options.authenticateType === 'local') {
      const tokenHeader = $auth.options.tokenHeader

      $auth.$http.interceptors.request.use(config => {
        if ($auth.getToken()) {
          if ($auth.options.tokenType) {
            config.headers[tokenHeader] = [$auth.options.tokenType, $auth.getToken()].join(' ')
          } else {
            config.headers[tokenHeader] = $auth.getToken()
          }
        } else {
          delete config.headers[tokenHeader]
        }
        return config
      })
    }
  },
  // axios的响应过滤器
  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use(
      response => {
        // iam未登录状态
        if (response.code === 'core.e1019') {
          window.location.href = $auth.currentProvider.loginUrl
        }
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          Message({
            message: '登录失效, 请重新登录! ',
            type: 'error',
            duration: 5 * 1000,
          })
          $auth.permStorage.removeItem('allPerms')
          $auth.removeToken()
          window.location.href = $auth.currentProvider.loginUrl
        }
        return Promise.reject(error)
      }
    )
  },

  // 加载静态资源
  loadLayout: function ($auth) {
    const container = document.querySelector($auth.options.containerId)
    container.id = $auth.options.providers[$auth.authenticateType].containerId
    if ($auth.authenticateType === 'iam') {
      loadCss('/iam/layout/alogic-layout.css')
      loadJs('/iam/layout/alogic-layout.js')
    } else if ($auth.authenticateType === 'ctyun') {
      loadCss('/layout/static/css/app.css')
      loadJs('/layout/ctcloud-layout.min.js')
    }
  },

  // 三种用户权限相关的配置
  providers: {
    iam: {
      containerId: 'iam-console-container',
      loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`, // 对应后端的登录地址
      logoutUrl: 'https://iam.ctcdn.cn/iam/sign/out', // 对应后端或者iam的退出地址
      ifLogin: {
        url: '/iam/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
      },
      perms: {
        domain: '', // 菜单接口对应的domain，业务方自行配置
        url: '/iam/gw/workspace/menu/GetTree', // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.items', // 可以拿到数据的key
        dataHandler: data => data, // 数据格式转换，转换成统一的格式
      },
    },
    ctyun: {
      containerId: 'ctcloud-console',
      loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`,
      logoutUrl: 'https://www.ctyun.cn/sign/out',
      ifLogin: {
        url: '/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
      },
    },
    local: {
      containerId: 'container',
      loginUrl: `/login?redirect=${encodeURIComponent(window.location.href)}`,
      ifLogin: {
        url: '/v1/auth/account/ifLogin',
        method: 'GET',
        dataHandler: data => data,
      },
      // TODO 以后考虑多个接口，改成数组
      perms: {
        url: '/v1/auth/account/menus',
        method: 'GET',
        dataHandler: data => data,
      },
    },
  },
}
```

## routes 相关说明

routes 的格式与正常的 vue-router 要求的 routes 格式一致，通过 meta 中的两个字段来标识用户与权限相关的内容：

- withoutLogin: true 对于不需要登录的页面，传这个字段
- perms: ['/permission/user'] 如果包含 perms 字段，则会去校验该路由对应页面的权限；perms 为数组（通常情况下只有一个），如果该数组包含用户有权看到的页面，则可以显示该页面
