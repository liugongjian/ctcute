// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCode from '../../../app/service/Code';
import ExportTheme from '../../../app/service/Theme';

declare module 'egg' {
  interface IService {
    code: AutoInstanceType<typeof ExportCode>;
    theme: AutoInstanceType<typeof ExportTheme>;
  }
}
