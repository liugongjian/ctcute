import 'egg';

declare module 'egg' {
  interface Application {
    BizErrorHandler: any;
  }
}
