import { Controller } from 'egg'

export default class CodeController extends Controller {
  /**
   * 获得代码清单
   */
  public async getManifest() {
    const { ctx } = this
    const path = ctx.query.path
    const data = await ctx.service.code.getManifest(path)
    ctx.body = data
  }

  /**
   * 获得代码
   */
  public async getCode() {
    const { ctx } = this
    const path = ctx.query.path
    const data = await ctx.service.code.getCode(path)
    ctx.body = data
  }
}
