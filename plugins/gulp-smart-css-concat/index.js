const gutil = require('gulp-util');
const through = require('through2');
const css = require('css');
const pkg = require('./package.json')
const PLUGIN_NAME = pkg.name;

function getRuleKey(rule) {
  return [rule.selectors.join(), rule.declarations.map(d => d.property + '_' + d.value).join('@')].join('*')
}

function removeDuplicateRules(list) {
  const filterRules = []
  const cacheRules = {}
  list.forEach(function (r) {
    if (r.selectors) {
      // 以selectors和declarations属性值集合为key，严格对比，如相同则认为重复；
      // 对于有相同样式名，只要其中的样式顺序或属性值不同即可不受影响，都会正常录入
      if (!cacheRules[getRuleKey(r)]) {
        cacheRules[getRuleKey(r)] = true
        filterRules.push(r)
      }
    } else if (r.type === "media") {
      // 已知cuted-theme.css的@media来自element-ui，所以简单排重
      if (!cacheRules[r.media]) {
        cacheRules[r.media] = true
        filterRules.push(r)
      }
    } else {
      filterRules.push(r)
    }
  });
  return filterRules
}

function cssConcat(string) {
  var css_ast = css.parse(string);
  css_ast.stylesheet.rules = removeDuplicateRules(css_ast.stylesheet.rules);
  return css.stringify(css_ast);
};

module.exports = function (options) {
  function transform(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    file.contents = Buffer.from(cssConcat(file.contents.toString(), options || {}));

    callback(null, file);
  }

  return through.obj(transform);
};