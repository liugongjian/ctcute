## 背景

后台管理系统一般都会用到用户权限，无论是自建的用户权限体系，还是对接第三方用户权限系统，对每个项目来说都是重要但重复的工作。 @cutedesign/authenticate 集成了研发三部常用的用户权限体系，使业务方只需关心业务本身，无需重复建设。

## 简介

@cutedesign/authenticate 包括两部分，一部分是用户、一部分是权限。
其中用户部分支持三种模式：

- cuted 内置用户(local)
- 天翼云用户(ctyun)
- IAM 用户(iam)

权限部分则直接按需配置在对应用户类型下即可，以提高使用的自由度（不要权限时可以通过 enableAuthorize 关闭）。

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
// 权属数据支持多个（数组）
<el-button v-permission="['/permission/user/:add']">+ 新增按钮</el-button>
// 权属数据支持单个
<el-button v-permission="'/permission/user/:add'">+ 新增按钮</el-button>
// 权属数据支持为空，默认显示
<el-button v-permission="">+ 新增按钮</el-button>
// 权属数据支持为空，严格模式不显示
<el-button v-permission.strict="">+ 新增按钮</el-button>
```

其中`'/permission/user/:add'`是配置的权限 code

5. 对于一块的内容可通过`<is-authorized>`组件实现，举例如下：

```
<is-authorized :permissions="['/permission/user/:add']">
  <!-- Elements to show if user can update resource -->
  胡佳婷test
</is-authorized>
```

其中`'/permission/user/:add'`是配置的权限 code
同时，`is-authorized`组件暴露了`is-authorized-component`样式，可进行覆盖，如:

```
.is-authorized-component {
  background: red;
}
```

6. 对于`el-tabs`组件，某个 tab 的显示隐藏无法直接通过`v-permission`或者`<is-authorized>`实现，可通过插件暴露的`isAuthorized`方法直接控制，举例如下：

```
<el-tab-pane
  v-if="$auth.isAuthorized(['/permission/user/:add'])"
  label="默认项"
  name="second"
></el-tab-pane>
```

7. 当时对接 iam 或 ctyun 时，需要使用其 layout ，这里提供了快捷的使用方式，示例如下：

```js
import { IamLayout, showLoadFailPage } from '@cutedesign/authenticate'

new IamLayout({
  // containerId: 'container', // 默认容器 id ，可按需调整
})
  .init({
    bizDomain: 'cdn', //
  })
  .then(() => {
    new Vue({
      // i18n, // 按需开启
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  })
  .catch(() => showLoadFailPage())
```

```js
import { CtyunLayout, showLoadFailPage } from '@cutedesign/authenticate'

new CtyunLayout({
  // containerId: 'container', // 默认容器 id ，可按需调整
})
  .init({
    bizDomain: 'console.cdn',
    logoutUrl: '/cdn/sign/out',
  })
  .then(() => {
    new Vue({
      // i18n, // 按需开启
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  })
  .catch(() => showLoadFailPage())
```

ps：使用上述默认配置时，public/index.html 中需如下定义

```html
<body>
  <div id="container">
    <div id="app"></div>
  </div>
</body>
```

需要配置 nginx 示例如下（注意：静态资源可以直接转发，接口的转发需要考虑鉴权问题）：
```nginx
location /iam/layout {
  proxy_set_header Host vip.ctcdn.cn;
  proxy_pass https://vip.ctcdn.cn/layout;
}
location /iam {
  proxy_set_header Host vip.ctcdn.cn;
  proxy_pass https://vip.ctcdn.cn;
}

location /ctyun/layout {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/console/layout;
}
location /ctyun/portal {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/portal;
}
location /gw {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/gw;
}
location /v1/bcc {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn;
}
```

补充：[ctyun layout 文档](https://wwwgray.ctyun.cn/devdocs/consoleLayout/)

## 配置项

```javascript
export default <AuthConfigOptions>{
  baseUrl: null, // 后端接口的基础路径
  tokenName: 'token', // cuted内置用户体系token的名字
  tokenPrefix: 'vueauth', // cuted内置用户体系token的前缀
  tokenHeader: 'Authorization', // cuted内置用户体系接口中传的tokenHeader字段名
  tokenType: null, // cuted内置用户体系token类型，常用的是'Bear'
  loginUrl: '/v1/auth/login', // cuted内置用户体系登录接口
  logoutUrl: '/v1/auth/logout', // cuted内置用户体系退出接口
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
  /**
   * Default request interceptor for Axios library
   * @context {VueAuthenticate}
   */
  bindRequestInterceptor: function ($auth) {
    const { authenticateType } = $auth.options
    if (authenticateType === 'local') {
      const tokenHeader = $auth.options.tokenHeader

      $auth.$http.interceptors.request.use((config: AxiosRequestConfig) => {
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
    } else if (authenticateType === 'iam' && $auth.currentProvider.enableWorkspace) {
      $auth.$http.interceptors.request.use(IamWorkspace.requestInterceptor)
    }
  },
  // bindResponseInterceptor
  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          // 认证失败的后端状态码，建议对接的后端用这种方式统一拦截
          Message({
            message: '登录失效, 请重新登录! ',
            type: 'error',
            duration: 5 * 1000,
          })
          $auth.permStorage.removeItem('isLogin')
          $auth.permStorage.removeItem('allPerms')
          $auth.removeToken()
          window.location.href = $auth.currentProvider.ifLogin.loginUrl
        }
        return Promise.reject(error)
      }
    )
  },

  // 在插件路由的beforeEach钩子最开始执行的钩子函数，需要调整 to 则按需返回，不需要任何处理则返回 undefined ，不影响后续流程
  beforeEachStartHook: async function () {
    return void 0
  },

  // 在插件路由的beforeEach钩子报错时执行的钩子函数
  beforeEachErrorHook: async function () {
    return void 0
  },

  // 三种用户权限相关的配置
  providers: {
    iam: {
      enableWorkspace: true, // iam 默认启用 wid
      ifLogin: {
        loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`, // 对应业务后端的登录地址
        url: '/iam/gw/auth/Current', // 检查用户是否登录的线上接口
        method: 'GET',
        // dataHandler: data => data, // 数据格式转换，转换成统一的格式，按需提供
        // afterLogin: userinfo => {}, // 登录成功后，拿到用户信息执行一些操作
        loggedRouterBeforeEach: (to, $auth) => {
          if (!$auth.currentProvider.enableWorkspace) return

          if (to.name !== 'interceptor') {
            return IamWorkspace.routerBeforeEach(to)
          }
        },
        unloggedRouterBeforeEach(to, $auth) {
          window.location.href = `${$auth.options.baseUrl}${this.loginUrl}`
        },
      },
      perms: {
        domain: '', // 菜单接口对应的domain （osp 中的菜单代码），业务方按需重写
        url: IamMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.items', // 可以拿到数据的key
        dataHandler: IamMenu.dataFormat, // 数据格式转换，转换成统一的格式
        setWorkspaceId: IamWorkspace.setWorkspaceId,
        canGetPermsBeforeRoute: to => to.name !== 'interceptor', // 判断当前路由是否需要获取权限信息
      },
    },
    ctyun: {
      ifLogin: {
        loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`, // 对应业务后端的登录地址
        url: '/gw/auth/Current',
        method: 'GET',
        unloggedRouterBeforeEach(to, $auth) {
          window.location.href = `${$auth.options.baseUrl}${this.loginUrl}`
        },
      },
      // TODO ctyun 不需要鉴权，这个配置的意义主要在于菜单上下线，存在意义待定
      perms: {
        domain: '', // 菜单接口对应的domain （oss 中的菜单代码），业务方按需重写
        url: CtyunMenu.fetchUrl, // 获取用户权限的接口
        method: 'GET',
        responseDataKey: 'data.list', // 可以拿到数据的key
        dataHandler: CtyunMenu.dataFormat, // 数据格式转换，转换成统一的格式
      },
    },
    local: {
      ifLogin: {
        url: '/v1/auth/account/ifLogin',
        loginUrl: `/login?redirect=${encodeURIComponent(window.location.href)}`,
        method: 'GET',
        dataHandler: data => data,
        afterLogin: $auth => $auth.getPermInfo(true),
        loggedRouterBeforeEach: to => (to.path === '/login' ? '/' : void 0),
        unloggedRouterBeforeEach: to => `/login?redirect=${to.path === '/login' ? '/' : to.path}`,
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

## 限制

- 对接 iam/ctuyn 用户+cuted 自带权限，预期后端使用 iam/ctyun 的 cookie 来作为身份认证
