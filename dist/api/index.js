"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = "http://localhost:3000";
axios_1.default.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";
axios_1.default.interceptors.request.use(function (config) {
    var access_token = sessionStorage.getItem('access_token');
    if (access_token)
        config.headers['Authorization'] = "Bearer " + access_token;
    return config;
}, function (error) { return Promise.reject(error); });
//response拦截器里把AxiosResponse=>AxiosResponse.data
axios_1.default.interceptors.response.use(function (response) { return response.data; }, function (error) { return Promise.reject(error); });
exports.default = axios_1.default;
//# sourceMappingURL=index.js.map