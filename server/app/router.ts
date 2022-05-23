import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/v1/code/manifest', controller.code.getManifest)
  router.get('/v1/code', controller.code.getCode)
}
