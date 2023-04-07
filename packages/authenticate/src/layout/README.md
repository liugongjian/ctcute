# 关于两种 layout 的定制化需求

## 一、layout

主要完成 layout 初始化工作，支持配置相关参数。

### 1、IAM Layout

```js
import { IamLayout } from "@cutedesign/layout"

// 可以使用默认配置，也可以自定义配置
const layoutInstance = new IamLayout(config?: LayoutConfigOptions);

// 或是滞后配置
layoutInstance.setConfig(config: LayoutConfigOptions)

// 执行初始化，目前支持配置 html 容器 id
layoutInstance.init(option?: IamLayoutInitOptions).then((console: AlogicLayout.consoleContainer) => {
  // ... 按需做一些事情，目前会将 layout 中的 console 返回，方便直接调用其方法

  // eg1：按需找业务需要，对控制台进行调整
  console.match()
  console.updateMenu()

  // eg2：拿到 layout 中已经请求到的用户信息，做一些处理
  const { authCurrentPromise } = window.AlogicLayout
})
```

```nginx
location /iam/layout {
  proxy_set_header Host vip.ctcdn.cn;
  proxy_pass https://vip.ctcdn.cn/layout;
}
```

### 2、CTYUN Layout

```js
import { CtyunLayout } from "@cutedesign/layout"

// 可以使用默认配置，也可以自定义配置
const layoutInstance = new CtyunLayout(config?: LayoutConfigOptions);

// 或是滞后配置
layoutInstance.setConfig(config: LayoutConfigOptions)

// 执行初始化，目前支持 consoleLayout.init 参数和是否启用服务栏
layoutInstance.init(option?: CtyunLayoutInitOptions).then((console: CtcloudLayout.consoleLayout) => {
  // ... 按需做一些事情，目前会将 layout 中的 console 返回，方便直接调用其方法
})
```

```nginx
location /ctyun/layout {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/console/layout;
}
location /ctyun {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn;
}
```

## 二、user

如果 layout 和业务是串行执行（即 layout 加载完后，才执行业务初始化），则可以直接在上一步使用 authCurrentPromise 作为用户信息的获取入口。而如果需要同步初始化，则可能需要单独通过 current 接口获取用户信息，因此单独提供一份。

### 1、IAM user

```nginx
location /iam/gw {
  proxy_set_header Host vip.ctcdn.cn;
  proxy_pass https://vip.ctcdn.cn;
}
```

### 2、CTYUN user

```nginx
location ^/gw {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/gw;
}
# layout 中的业务接口，由于 v1 可能跟业务规则冲突，因此多指定了一层
location ^/v1/bcc {
  proxy_set_header Host www.ctyun.cn;
  proxy_pass https://www.ctyun.cn/v1/bcc;
}
```

## 三、menu

本模块主要提供菜单的`请求地址`（使用时需要配置接口代理规则）和菜单内容的差异抹平。

由于 `@cute/authenticate` 包中的菜单鉴权方案为：获取用户拥有的权限列表（包含菜单+按钮），然后按需使用路由配置的 `perms` 属性进行匹配过滤，因此本包按照这种思路提供了 format 方法支持。同时在这种情况下，osp 中的菜单配置仅 `菜单代码 ucode` 和 `权限控制 plist` 有实际意义了。

如果使用 IAM 系统的菜单权限控制功能，则需要在 osp 中进行对应的菜单配置，相关说明可以参考：[按需在 osp 中创建新控制台的服务并进行配置](https://devops.ctcdn.cn/confluence/pages/viewpage.action?pageId=39996428)，其中和前端关系比较密切的是 `角色配置` 和 `菜单配置`。

ctyun 的菜单在 oss 管理（IT 运维中心维护），该平台拿权限比较费劲，可以考虑参考 cdn 的解决方案，把菜单放到 osp 这边进行维护，相关[解决方案](https://devops.ctcdn.cn/confluence/pages/viewpage.action?pageId=46993083)。

ps：oss 相关的平台已经不知道怎么访问了，有需要可以咨询 王汕（产品），cdn 已经切到 iam 管理。

## 四、workspace

由于 IAM 的权限控制是基于工作区概念的，因此所有的服务都需要明确 workspaceId （在 Ctyun 中，使用 userId 作为 workspaceId）。这里提供了一个路由守卫，如果存在则继续执行路由跳转，如果不存在则按需跳到对应页面（IAM 跳到工作区列表选择页，Ctyun 直接跳到登录页）。

## 其它

两种 layout 对应了两种场景的控制台，主要区别如下：

- vip 控制台
  - 面向高级用户（团队用户）
  - 对接 IAM 登录
  - 对接 osp 配置菜单
  - 可以通过工作区进行分权控制（可定制度高）
  - 使用 alogic-layout
- ctyun 控制台
  - 面向个人用户，内置工作区只有用户一人
  - 对接天翼云官网登录
  - 对接 oss 配置菜单（可以考虑改为对接 osp ，由后端抹平差异，前端配置菜单时需要给该菜单 domain 参数增加 ctyun. 前缀）
  - 不支持权限定制（也没有必要定制权限，仅一人使用）
  - 使用 ctcloud-layout
