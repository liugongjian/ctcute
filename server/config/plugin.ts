import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  bizerror: {
    enable: true,
    package: 'egg-bizerror',
  },
}

export default plugin
