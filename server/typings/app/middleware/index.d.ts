// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportErrorHandler from '../../../app/middleware/error-handler';
import ExportResponseWrapper from '../../../app/middleware/response-wrapper';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    responseWrapper: typeof ExportResponseWrapper;
  }
}
