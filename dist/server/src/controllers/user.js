"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = exports.validate = exports.login = exports.register = void 0;
var models_1 = require("../models");
var validator_1 = require("../utils/validator");
var HttpException_1 = __importDefault(require("../exceptions/HttpException"));
var http_status_codes_1 = require("http-status-codes");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var register = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, confirmPassword, email, _b, valid, errors, oldUser, user, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, confirmPassword = _a.confirmPassword, email = _a.email;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                _b = validator_1.validateRegisterInput(username, password, confirmPassword, email), valid = _b.valid, errors = _b.errors;
                if (!valid) {
                    throw new HttpException_1.default(http_status_codes_1.UNPROCESSABLE_ENTITY, '用户提交的数据不正确', errors);
                }
                return [4 /*yield*/, models_1.User.findOne({ username: username })];
            case 2:
                oldUser = _c.sent();
                if (oldUser) {
                    throw new HttpException_1.default(http_status_codes_1.UNPROCESSABLE_ENTITY, '用户名重复', errors);
                }
                user = new models_1.User({ username: username, password: password, confirmPassword: confirmPassword, email: email });
                return [4 /*yield*/, user.save()];
            case 3:
                _c.sent();
                res.json({
                    success: true,
                    data: user.toJSON()
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _c.sent();
                next(error_1);
                return [3 /*break*/, 5];
            case 5:
                ;
                return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, access_token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, models_1.User.login(username, password)];
            case 1:
                user = _b.sent();
                if (user) {
                    access_token = user.getAccessToken();
                    res.json({
                        success: true,
                        data: access_token
                    });
                }
                else {
                    throw new HttpException_1.default(http_status_codes_1.UNAUTHORIZED, '登录失败');
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
//客户端会把token放在请求头里发给服务器
var validate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, access_token, userPayload, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authorization = req.headers.authorization;
                if (!authorization) return [3 /*break*/, 7];
                access_token = authorization.split(' ')[1];
                if (!access_token) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                userPayload = jsonwebtoken_1.default.verify(access_token, process.env.JWT_SECRET_KEY || 'zhufeng');
                return [4 /*yield*/, models_1.User.findById(userPayload.id)];
            case 2:
                user = _a.sent();
                if (user) {
                    res.json({
                        success: true,
                        data: user.toJSON()
                    });
                }
                else {
                    next(new HttpException_1.default(http_status_codes_1.UNAUTHORIZED, '用户未找到'));
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                next(new HttpException_1.default(http_status_codes_1.UNAUTHORIZED, 'access_token不正确'));
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                next(new HttpException_1.default(http_status_codes_1.UNAUTHORIZED, 'access_token未提供'));
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                next(new HttpException_1.default(http_status_codes_1.UNAUTHORIZED, 'authorization未提供'));
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.validate = validate;
var uploadAvatar = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, avatar, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.body.userId;
                avatar = req.protocol + "://" + req.headers.host + "/uploads/" + req.file.filename;
                return [4 /*yield*/, models_1.User.updateOne({ _id: userId }, { avatar: avatar })];
            case 1:
                _a.sent();
                //处理上传的文件，然后更新数据库，更新此用户对应的avatar字段。然后返回真实的图片路径
                res.json({
                    success: true,
                    data: avatar
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.uploadAvatar = uploadAvatar;
//# sourceMappingURL=user.js.map