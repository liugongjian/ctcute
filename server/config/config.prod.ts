import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    logger: {
      dir: '/home/nginx/scaffold/server/logs/eggts',
    },
  }
  return config
}
