import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/v1/code/manifest', controller.code.getManifest)
  router.get('/v1/code', controller.code.getCode)
  router.get('/v1/codes', controller.code.getCodes)
  router.get('/v1/pageNames', controller.code.getAllPageName)
  router.get('/v1/pages', controller.code.getPageList)
  router.get('/v1/theme', controller.theme.getTheme)
  router.get('/v1/scss/gen', controller.scss.genScssTheme)
}
