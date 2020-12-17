"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("./index.less");
var icons_1 = require("@ant-design/icons");
function Tabs(_props) {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement(react_router_dom_1.NavLink, { exact: true, to: "/" },
            react_1.default.createElement(icons_1.HomeOutlined, null),
            react_1.default.createElement("span", null, "\u9996\u9875")),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/mine" },
            react_1.default.createElement(icons_1.UserOutlined, null),
            react_1.default.createElement("span", null, "\u8D2D\u7269\u8F66")),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/profile" },
            react_1.default.createElement(icons_1.ShoppingCartOutlined, null),
            react_1.default.createElement("span", null, "\u4E2A\u4EBA\u4E2D\u5FC3"))));
}
exports.default = Tabs;
//# sourceMappingURL=index.js.map