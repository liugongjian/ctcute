// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportCode from '../../../app/controller/Code';
import ExportScss from '../../../app/controller/Scss';
import ExportTheme from '../../../app/controller/Theme';

declare module 'egg' {
  interface IController {
    code: ExportCode;
    scss: ExportScss;
    theme: ExportTheme;
  }
}
