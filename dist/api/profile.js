"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.validate = void 0;
var index_1 = __importDefault(require("./index"));
exports.validate = function () {
    return index_1.default.get("/user/validate");
};
exports.register = function (values) {
    return index_1.default.post("/user/register", values);
};
exports.login = function (values) {
    return index_1.default.post("/user/login", values);
};
//# sourceMappingURL=profile.js.map