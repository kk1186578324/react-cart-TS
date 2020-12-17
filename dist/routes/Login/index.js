"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.less");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var profile_1 = __importDefault(require("@/store/actions/profile"));
var Nav_1 = __importDefault(require("@/components/Nav"));
function Login(props) {
    var layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 12 },
    };
    var tailLayout = {
        wrapperCol: { offset: 4, span: 12 },
    };
    var onFinish = function (values) {
        props.login(values);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Nav_1.default, { history: props.history }, "\u767B\u5F55"),
        react_1.default.createElement(antd_1.Form, __assign({}, layout, { className: "register-form", name: "basic", onFinish: onFinish }),
            react_1.default.createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                react_1.default.createElement(antd_1.Input, null)),
            react_1.default.createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                react_1.default.createElement(antd_1.Input.Password, null)),
            react_1.default.createElement(antd_1.Form.Item, __assign({}, tailLayout),
                react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "\u767B\u5F55")))));
}
var mapStateToProps = function (state) { return state.profile; };
exports.default = react_redux_1.connect(mapStateToProps, profile_1.default)(Login);
//# sourceMappingURL=index.js.map