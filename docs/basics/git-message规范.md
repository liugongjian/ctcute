## 规范说明

简单约束下 commit message 的格式：

`<type>(scope)：<commit message>`

### 1、type（必须）

其中：type为 commit 的类型，有以下几种：

+ feat: 新特性
+ fix: 修复问题
+ refactor: 代码重构
+ docs: 文档修改
+ style: 代码格式修改，注意不是 css 修改
+ perf: 性能 (提高代码性能的改变)
+ test: 测试用例修改
+ chore: 其他修改，比如构建流程，依赖管理

参考：[angular 规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)

扩展几种 commit 类型：

+ ci：持续集成相关
+ types：ts类型修改
+ release：发布相关，主要指 build 后 dist 目录的提交

### 2、scope（非必须）

用于标明当前 commit 具体作用域范围，用于支持快速定位。

eg：`fix(Button): 修复 Btton xx 功能 (jira CUTEDESIGN-9527))`

## git hooks

```json
{
    // package.json
    "gitHooks": {
        "commit-msg": "node ./scripts/verifyCommit.js"
    },
}
```
