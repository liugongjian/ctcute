export default () => {
  return async function responseWrapper(ctx, next) {
    await next()
    ctx.body = {
      code: 200,
      data: ctx.body
    }
  }
}
