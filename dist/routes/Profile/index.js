"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./index.less");
var react_redux_1 = require("react-redux");
var Nav_1 = __importDefault(require("@/components/Nav"));
var state_1 = require("@/typings/state");
var profile_1 = __importDefault(require("@/store/actions/profile"));
var antd_1 = require("antd");
function Profile(props) {
    react_1.useEffect(function () {
        var result = props.validate();
    }, []);
    var content;
    if (props.loginState === state_1.LOGIN_TYPES.UN_VALIDATE) {
        content = null;
    }
    else if (props.loginState === state_1.LOGIN_TYPES.LOGINED) {
        content = (react_1.default.createElement("div", { className: "user-info" },
            react_1.default.createElement(antd_1.Descriptions, { title: "\u7528\u6237\u4FE1\u606F" },
                react_1.default.createElement(antd_1.Descriptions.Item, { label: "\u7528\u6237\u540D" }, props.user.username),
                react_1.default.createElement(antd_1.Descriptions.Item, { label: "\u90AE\u7BB1" }, props.user.email)),
            react_1.default.createElement(antd_1.Button, { type: "ghost", onClick: props.logout }, "\u9000\u51FA")));
    }
    else {
        content = (react_1.default.createElement("div", { className: "user-info" },
            react_1.default.createElement(antd_1.Alert, { type: "warning", message: "\u672A\u767B\u5F55", description: "\u4EB2\u7231\u7684\u7528\u6237\u4F60\u597D\uFF0C\u4F60\u5C1A\u672A\u767B\u5F55\uFF0C\u8BF7\u6CE8\u518C\u6216\u8005\u767B\u5F55" }),
            react_1.default.createElement("div", { style: { textAlign: 'center', padding: '.5rem' } },
                react_1.default.createElement(antd_1.Button, { type: "dashed", onClick: function () { return props.history.push('/login'); } }, "\u767B\u5F55"),
                react_1.default.createElement(antd_1.Button, { type: "dashed", style: { marginLeft: "20px" }, onClick: function () { return props.history.push('/register'); } }, "\u6CE8\u518C"))));
    }
    return (react_1.default.createElement("section", null,
        react_1.default.createElement(Nav_1.default, { history: props.history }, "\u4E2A\u4EBA\u4E2D\u5FC3"),
        content));
}
var mapStateToProps = function (state) { return state.profile; };
exports.default = react_redux_1.connect(mapStateToProps, profile_1.default)(Profile);
/**
 * @param
 * 因为此组件是由路由渲染出来的
 * 所以属性对象会包括路由属性
 * 另外此组件需要连接仓库
 * */
//# sourceMappingURL=index.js.map