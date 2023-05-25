const gutil = require('gulp-util');
const through = require('through2');
const css = require('css');
const pkg = require('./package.json')
const PLUGIN_NAME = pkg.name;

function processRules(list, options) {
  return list.map(function (r) {
    if (r.selectors) {
      r.selectors.forEach(function (s, index) {
        if (options.skip && options.skip.test(s)) return
        var selector = options.selector ? options.selector + " " + s : s;
        r.selectors[index] = selector;
      });
    }
    if (r.type === "media") {
      r.rules = processRules(r.rules, options);
    }
    return r;
  });
}

function cssWrap(string, options) {
  options = Object.assign({}, options || {});
  // 如果设置了ignore或者没有selector，则原封不动返回
  if (options.ignore || !options.selector) {
    return string
  }
  // 忽略字体icon样式，如.el-icon-eleme:before
  if (!options.skip) {
    options.skip = /^.(el|cute)-icon-[a-z0-9-]+:before$/
  }
  var css_ast = css.parse(string);
  css_ast.stylesheet.rules = processRules(css_ast.stylesheet.rules, options);
  return css.stringify(css_ast);
};

/**
 * 
 * options = {
 *  ignore: boolean, 为true则原封不动返回
 *  selector: string, 添加的前缀namespace
 *  skip: 正则表达式, 对某些特殊样式忽略加namespace
 * }
 */
module.exports = function (options) {
  function transform(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    file.contents = Buffer.from(cssWrap(file.contents.toString(), options || {}));

    callback(null, file);
  }

  return through.obj(transform);
};