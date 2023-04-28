import { Controller } from 'egg'

export default class ScssController extends Controller {
  /**
   * 获得代码清单
   */
  public async genScssTheme() {
    const { ctx } = this
    console.log(ctx)
    const code = ctx.query.code
    const data = await ctx.service.scss.genScssTheme(code)
    ctx.body = data
  }
}
