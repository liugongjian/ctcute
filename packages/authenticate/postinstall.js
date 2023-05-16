const pkg = require('./package.json')
const version = pkg.version

// 对于需要提醒的版本，在这里进行配置
const tips = {
  '2.0.1':
    '@cutedesign/authenticate 已更新到 v2.0.x ，该版本调整了在对接 iam 、ctyun 时 layout 的初始化方式，及配置项 providers 部分字段。为了避免影响到使用，建议先阅读 README.md 使用说明第7点。',
}

tips[version] && console.log(tips[version])
