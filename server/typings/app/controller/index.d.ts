// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCode from '../../../app/controller/Code';

declare module 'egg' {
  interface IController {
    code: ExportCode;
  }
}
