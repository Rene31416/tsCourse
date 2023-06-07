"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const inversify_1 = require("inversify");
const ts_lambda_api_1 = require("ts-lambda-api");
let HelloWorldController = exports.HelloWorldController = class HelloWorldController extends ts_lambda_api_1.Controller {
    get() {
        return {
            hello: "world",
        };
    }
    getSubResource() {
        return {
            hello: "world",
            sub: "resource",
        };
    }
};
__decorate([
    (0, ts_lambda_api_1.GET)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloWorldController.prototype, "get", null);
__decorate([
    (0, ts_lambda_api_1.GET)("/sub-resource"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloWorldController.prototype, "getSubResource", null);
exports.HelloWorldController = HelloWorldController = __decorate([
    (0, ts_lambda_api_1.apiController)("/hello-world"),
    (0, inversify_1.injectable)()
], HelloWorldController);
