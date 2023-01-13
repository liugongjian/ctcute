const chalk = require("chalk");
const msgPath = process.env.HUSKY_GIT_PARAMS || process.env.GIT_PARAMS;
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();
// 兼容分支合并自动生成的 commit 信息，其他按照规范约束
const commitRE = /^Merge branch|^(perf|chore|ci|feat|fix|refactor|docs|style|test|types|release)(\(\w+\))?\s*(:|：).{1,100}$/;

chalk.enabled = true;
chalk.level = 1;

if (!commitRE.test(msg)) {
  console.error(`
    ${chalk.bgRed.white("错误：")} ${chalk.red("无效的 commit-message 格式")}\n
    ${chalk.red("需要按照文档中要求书写，type 必须正确填写，scope 按需选择。示例：")}\n
      ${chalk.green("feta: 完成 xxx 功能")}
      ${chalk.green("fix(Button): 修复 Btton xx 功能 (jira CUTEDESIGN-9527)")}
      ${chalk.green("docs: 编写文档")}
      ${chalk.green("chore: 调整依赖版本")}\n
    ${chalk.red("更多查看 ./docs/basics/git-message规范.md ")}\n
  `);
  process.exit(1);
}
