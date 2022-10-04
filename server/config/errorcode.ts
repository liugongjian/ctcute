export default {
  PAGE_NOT_FOUND: (_, error) => ({
    status: 200,
    code: 404,
    message: error.bizParams.message || '页面不存在',
  }),
  MANIFEST_JSON_ERR: {
    status: 502,
    code: 502,
    message: '解析manifest错误，请确认是正确的JSON格式'
  },
  THEME_NOT_FOUND: {
    status: 200,
    code: 404,
    message: '主题不存在',
  },
}
