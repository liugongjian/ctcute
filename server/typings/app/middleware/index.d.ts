// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error-handler');
import ExportResponseWrapper = require('../../../app/middleware/response-wrapper');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    responseWrapper: typeof ExportResponseWrapper;
  }
}
