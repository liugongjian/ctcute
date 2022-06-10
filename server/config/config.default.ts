import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653205354048_2216'

  // add your egg config in here
  config.middleware = [ 'errorHandler', 'responseWrapper' ]

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    bizerror: {
      breakDefault: false, // disable default error handler
      sendClientAllParams: false, // return error bizParams to user
      interceptAllError: true, // handle all exception, not only bizError exception
    },
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
