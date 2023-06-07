"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
const path = require("path");
const ts_lambda_api_1 = require("ts-lambda-api");
const appConfig = new ts_lambda_api_1.AppConfig();
appConfig.base = "/api/v1";
appConfig.version = "v1";
const controllersPath = [path.join(__dirname, "controllers")];
const app = new ts_lambda_api_1.ApiLambdaApp(controllersPath, appConfig);
async function name(event, context) {
  return await app.run(event, context);
}
exports.name = name;
