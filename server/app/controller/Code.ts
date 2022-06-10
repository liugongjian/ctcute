import { Controller } from 'egg'

export default class CodeController extends Controller {
  /**
   * 获得代码清单
   */
  public async getManifest() {
    const { ctx } = this
    const name = ctx.query.name
    const data = await ctx.service.code.getManifest(name)
    ctx.body = data
  }

  /**
   * 根据文件路径获得单个代码
   */
  public async getCode() {
    const { ctx } = this
    const path = ctx.query.path
    const data = await ctx.service.code.getCode(path)
    ctx.body = data
  }

  /**
   * 根据页面名称获得所有代码
   */
  public async getCodes() {
    const { ctx } = this
    const name = ctx.query.name
    const data = await ctx.service.code.getCodes(name)
    ctx.body = data
    // try {

    // } catch(e) {
    //   console.log('====e====', e)
    //   ctx.throwBizError('PAGE_NOT_FOUND')
    // }
  }
}
