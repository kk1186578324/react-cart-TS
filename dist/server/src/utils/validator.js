"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegisterInput = void 0;
var validator_1 = __importDefault(require("validator"));
//校验注册用户提交数据合法性
var validateRegisterInput = function (username, password, confirmPassword, email) {
    var errors = {};
    if (username === undefined || username.length == 0) {
        errors.username = '用户名不能为空';
    }
    if (password === undefined || password.length == 0) {
        errors.password = '密码不能为空';
    }
    if (confirmPassword === undefined || confirmPassword.length == 0) {
        errors.confirmPassword = '确认密码不能为空';
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = '密码和确认密码不相等';
    }
    if (email === undefined || email.length == 0) {
        errors.email = '邮箱不能为空';
    }
    if (!validator_1.default.isEmail(email)) {
        errors.email = '邮箱格式不正确';
    }
    return { valid: Object.keys(errors).length == 0, errors: errors };
};
exports.validateRegisterInput = validateRegisterInput;
//# sourceMappingURL=validator.js.map