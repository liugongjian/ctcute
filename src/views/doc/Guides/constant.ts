export const ILLUSTRATE = `
# 快速上手
- fe-cli脚手架可以选择使用不同项目模板，创建相应的基础项目。此文主要是对各项目的使用进行说明，以便使用者快速上手
- 前提：
1. 把镜像源切换到私库[\`http://verdaccio.ctcdn.cn/\`](http://verdaccio.ctcdn.cn/)。PS：需要本地配置hosts【36.111.140.224 verdaccio.ctcdn.cn】
2. 全局安装脚手架\`npm install -g fe-cli\`和命令行工具\`npm install -g cute-design-tools\`

## cute-design-template：基于前端组件库的项目模板
- 从 UI 到前端，统一研三后管系统的风格，保持各项目的一致性，大到页面，小到交互。
- 适用范围：新项目中应用系统或控制台类型的项目
- 具体使用详情 [脚手架使用说明书](https://cloud.ctcdn.cn/s/9ELNBiqyW96y7Kg)
- 参考项目：http://fed.ctyuncdn.cn/
- 模板提供者：胡佳婷
### 初始化项目

1. 执行fe-cli create <projectName>时，选择cute-design-template模板的master分支创建项目

2. [optional 输入项目名称]，默认的项目名称为’天翼云前端脚手架’

3. 根据自身项目需求，选择是否需要集成用户权限体系，目前支持的包括自建用户权限(local)，IAM(iam)，天翼云(ctyun)三种，具体配置请参考用户权限

4. 选择主题色，目前默认为橙色，已支持蓝色主题

5. 进入项目目录，试用cuted add <PageName> [optonal NewPageName] 生成demo页

6. [optional 安装依赖]，执行npm run serve(iam用户使用npm run serve:iam，ctyun用户使用npm run serve:ctyun)，启动项目即可（推荐⽤yarn安装，其他的⽬前测试可能有问题

7. [备选] 若您不需要安装全局依赖，可以跳过第二步，并使用npx fe-cli create<projectName>和npx cute-design-tools add的方式使用

### 启动项目

#### 最好使用npm 或 yarn
npm run serve

### 其它-cuted 工具简介
#### 列出所有页面
cuted ls
#### 新增页面
cuted add <PageName> [NewPageName]
#### 批量新增页面
cuted madd [.cuted.json]
#### 更换主题
cuted theme <themeName>

### 代码仓库
[https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git](https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git)
如果您没有权限，请联系胡佳婷（企业微信）帮您开通开发权限。



## egg-template-service：基于 Egg 的项目模板
- Egg 是阿里出品的一款 node.js 后端 web 框架，基于 koa 封装，并做了一些约定。
- Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。
- 适用范围：
- 具体使用细节 可查看 Egg 官网文档 https://eggjs.orglatest/
- 参考项目：BI 报表
- 模板提供者：万璐敏
### 初始化项目

1. 执行fe-cli create <projectName>时，选择egg-template-service模板的master分支创建项目
2. 选择是否安装依赖
3. 若选择是，则选择相应的依赖

### 启动项

$ npm i
$ npm run dev
$ open http://localhost:7040/

## electron-template：基于 electron 的项目模板
- Electron 是一个跨平台的、基于 Web 前端技术的桌面 GUI 应用程序开发框架。
- 适用范围：跨平台桌面应用程序
- 具体使用细节 可查看 electron 官网文档 https://www.electronjs.org/zh/docs/latest/
- 参考项目： 天翼云空间
- 模板提供者：陈俊滔

### 初始化项目

1. 执行fe-cli create <projectName>时，选择electron-template模板的master分支创建项目
2. 选择是否安装依赖
3. 若选择是，则选择相应的依赖

### 启动项目
#### 项目安装
yarn install
#### 本地运行
yarn electron:serve
#### 打包-打包后路径为 dist_electron
yarn electron:build

## library-template：上传到 npm 私服的依赖包模板
- 适用范围：若需要将工具打包成依赖包上传到 npm 私服，可以拉取此模板进行构建.
- 参考试例：ct-log、ct-monaco、markdown 等业务组件
- 模板提供者：甘雨涛
### 初始化项目

1. 执行fe-cli create <projectName>时，选择library-template模板的master分支创建项目
2. 输入第三方依赖名称
3. 输入作者
### 启动项目
- 1、package.json 参考配置，其中'NAME'为依赖名，自行替换
\`\`\`\`json
{
  "name": "NAME",
  "version": "0.2.2",
  "private": false,
  "scripts": {
    "dev": "webpack --config webpack.dev.js --progress",
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "make-lib": "vue-cli-service build --target lib --name NAME src/index.js"
  },
  "dependencies": {},
  "devDependencies": {},
  "files": ["dist", "README.md"],
  "main": "dist/NAME.common.js",
  "description": "## Project setup \`\`\` npm install \`\`\`",
  "repository": {
    "type": "git",
    "url": "ssh://git@gitlab.ctyuncdn.cn:24/feta/NAME.git"
  },
  "keywords": ["NAME"],
  "author": "ctyun",
  "license": "ISC"
}
\`\`\`\`

- 2、编译
npm install
npm run make-lib

### 发布
1. 私服添加个人账户
2. 本地登录账户并发布
\`\`\`\` bash
nrm use 私服地址
npm login
npm publish
\`\`\`\`

## teledb-dcp-template：数据库接入 DCP 平台相关工程模板 （待完善）
- 该模板尚未完善
- 适用范围：需要接入 DCP 平台的通用的头部的项目，使用 DCP 平台提供的权限功能对页面的功能进行控制，采用 DCP 提供的页面统一进行登录
- 参考项目：所有接入 DCP 平台的数据库产品控制台
- 模板提供者：谢世建

## alogic-cli-template：ibox istack iam open
- 参考项目：ibox istack iam openAPI
- 模板提供者：徐忠勇

## business-template
- 已弃用

`
