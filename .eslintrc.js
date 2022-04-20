module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量
    commonjs: true, // 支持 commonjs 语法
    node: true, // 支持 node
    es6: true // 支持 es6 语法
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: '2021'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'space-before-function-paren': [2, 'never'],
    'block-spacing': ['error', 'always'],
    'key-spacing': 'error',
    quotes: ['error', 'single'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never']
  }
}
