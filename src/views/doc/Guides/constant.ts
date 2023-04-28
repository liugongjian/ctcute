export const ILLUSTRATE = `
[[toc]]

## 一、cute-design-template：控制台的项目模板

详见[快速上手](http://fed.ctyuncdn.cn/docs/quick-start)

## 二、egg-template-service：基于 Egg 的项目模板

- Egg 是阿里出品的一款 node.js 后端 web 框架，基于 koa 封装，并做了一些约定。
- Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。
- 适用范围：
- 具体使用细节 可查看 [Egg 官网文档](https://eggjs.orglatest/)
- 参考项目：BI 报表
- 模板提供者：**万璐敏**

### 2.1 初始化项目

1. 执行fe-cli create <projectName>时，选择egg-template-service模板的master分支创建项目
2. 选择是否安装依赖
3. 若选择是，则选择相应的依赖

### 2.2 启动项

\`\`\`bash
$ npm i
$ npm run dev
$ open http://localhost:7040/
\`\`\`

## 三、electron-template：基于 electron 的项目模板

- Electron 是一个跨平台的、基于 Web 前端技术的桌面 GUI 应用程序开发框架。
- 适用范围：跨平台桌面应用程序
- 具体使用细节 可查看 electron 官网文档 https://www.electronjs.org/zh/docs/latest/
- 参考项目： 天翼云空间
- 模板提供者：**陈俊滔**

### 3.1 初始化项目

1. 执行fe-cli create <projectName>时，选择electron-template模板的master分支创建项目
2. 选择是否安装依赖
3. 若选择是，则选择相应的依赖

### 3.2 启动项目

\`\`\`bash
# 项目安装
yarn install
# 本地运行
yarn electron:serve
# 打包-打包后路径为 dist_electron
yarn electron:build
\`\`\`

## 四、library-template：上传到 npm 私服的依赖包模板

- 适用范围：若需要将工具打包成依赖包上传到 npm 私服，可以拉取此模板进行构建.
- 参考试例：ct-log、ct-monaco、markdown 等业务组件
- 模板提供者：**甘雨涛**

### 4.1 初始化项目

1. 执行fe-cli create <projectName>时，选择library-template模板的master分支创建项目
2. 输入第三方依赖名称
3. 输入作者

### 4.2 启动项目

- 1、package.json 参考配置，其中'NAME'为依赖名，自行替换

\`\`\`json
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
\`\`\`

- 2、编译

\`\`\` bash
npm install
npm run make-lib
\`\`\`

### 4.3 发布

1. 私服添加个人账户
2. 本地登录账户并发布

\`\`\` bash
nrm use 私服地址
npm login
npm publish
\`\`\`

## 五、teledb-dcp-template：数据库接入 DCP 平台相关工程模板 （待完善）

- 该模板尚未完善
- 适用范围：需要接入 DCP 平台的通用的头部的项目，使用 DCP 平台提供的权限功能对页面的功能进行控制，采用 DCP 提供的页面统一进行登录
- 参考项目：所有接入 DCP 平台的数据库产品控制台
- 模板提供者：**谢世建**

## 六、alogic-cli-template：ibox istack iam open

- 参考项目：ibox istack iam openAPI
- 模板提供者：**徐忠勇**

## 其他：~~business-template（已弃用）~~


`
