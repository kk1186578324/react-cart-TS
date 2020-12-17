"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.less");
var icons_1 = require("@ant-design/icons");
function Nav(props) {
    return (react_1.default.createElement("nav", { className: "nav-header" },
        react_1.default.createElement(icons_1.ArrowLeftOutlined, { className: "out-lined", onClick: function () { return props.history.goBack(); } }),
        props.children));
}
exports.default = Nav;
//# sourceMappingURL=index.js.map