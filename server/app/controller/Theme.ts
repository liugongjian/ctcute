import { Controller } from 'egg'

export default class ThemeController extends Controller {
  /**
   * 根据主题名称获得某一主题的代码文件内容
   */
  public async getTheme() {
    const { ctx } = this
    const name = ctx.query.name
    const data = await ctx.service.theme.getThemeCodes(name)
    ctx.body = data
  }

}
