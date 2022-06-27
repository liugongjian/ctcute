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
   * 根据页面名称获得某一页面所有代码
   */
  public async getCodes() {
    const { ctx } = this
    const name = ctx.query.name
    const data = await ctx.service.code.getCodes(name)
    ctx.body = data
  }

  /**
   * 根据页面名称获得多个页面的所有代码
   */
   public async getPageList() {
    const { ctx } = this
    const name = ctx.query.name
    const pageNames = (name || "").split(',')
    const data = await ctx.service.code.getPageList(pageNames)
    ctx.body = data
  }

  /**
   * 列出所有页面的名称
   */
   public async getAllPageName() {
    const { ctx } = this
    const data = await ctx.service.code.getAllPageName()
    ctx.body = data
  }
}
