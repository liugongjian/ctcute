// This file is created by egg-ts-helper@1.34.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCode from '../../../app/service/Code';
import ExportScss from '../../../app/service/Scss';
import ExportTheme from '../../../app/service/Theme';

declare module 'egg' {
  interface IService {
    code: AutoInstanceType<typeof ExportCode>;
    scss: AutoInstanceType<typeof ExportScss>;
    theme: AutoInstanceType<typeof ExportTheme>;
  }
}
