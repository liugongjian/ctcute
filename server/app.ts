import { Application, IBoot } from 'egg';

export default class AppBootHook implements IBoot {
  private readonly app: Application;
  constructor(app: Application) {
    this.app = app;
  }

  async beforeStart() { }

  configWillLoad() {
  }

  async didLoad() {
    // 覆盖BizErrorHandler
    this.app.BizErrorHandler = class extends this.app.BizErrorHandler {
      accepts() {
        return 'json';
      }
      json(ctx, _, config) {
        ctx.body = {
          code: config.code,
          msg: config.message,
          // error
        };
      }
    };
  }

  async willReady() {

  }

  async didReady() { }
}
