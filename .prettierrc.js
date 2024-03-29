/*
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-12 12:27:11
 * @Description:
 */
module.exports = {
  printWidth: 110, // 期待的每行长度，用于处理换行，和 eslint 的 max-len 不太一样，非强制换行
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false, // JSX标签闭合位置，false 时闭合标签单起一行，true 时跟在属性后面
  arrowParens: 'avoid', // 箭头函数括号，能省则省
  endOfLine: 'lf',
  vueIndentScriptAndStyle: false,
  proseWrap: 'preserve',
}
