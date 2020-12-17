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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./index.less");
var icons_1 = require("@ant-design/icons");
var config_1 = require("@/config");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
function LessonList(props, forwardRef) {
    var _a = react_1.useState(0), _ = _a[0], forceUpdate = _a[1];
    react_1.useEffect(function () {
        if (props.lessons.list.length == 0) {
            props.getLessons();
        }
        forwardRef.current = function () { return forceUpdate(function (x) { return x + 1; }); };
    }, []);
    var start; //开始真正渲染的起始索引，从他开始向下渲染3条数据，除此以外的卡片都用空的DIV撑开发
    var rootFontSize = parseFloat(document.documentElement.style.fontSize);
    console.log(rootFontSize);
    if (props.container.current) {
        var scrollTop = props.container.current.scrollTop;
        console.log(scrollTop);
        start = Math.floor((scrollTop - (4.266667 + 1.33) * rootFontSize) / (6.66667 * rootFontSize));
        console.log(start);
    }
    return (react_1.default.createElement("section", { className: "lesson-list" },
        react_1.default.createElement("h2", null,
            "\u5168\u90E8\u8BFE\u7A0B",
            react_1.default.createElement(icons_1.MenuOutlined, null)),
        react_1.default.createElement(antd_1.Skeleton, { loading: props.lessons.loading && props.lessons.list.length === 0 }, props.lessons.list.map(function (item, index) { return (index >= start && index <= start + 3 ? (react_1.default.createElement(react_router_dom_1.Link, { key: item.id, to: { pathname: "/detail/" + item.id, state: item } },
            react_1.default.createElement(antd_1.Card, { hoverable: true, key: index, style: { width: '100%' }, cover: react_1.default.createElement("img", { src: "" + config_1.config.img_url + item.image }) },
                react_1.default.createElement(antd_1.Card.Meta, { title: item.title, description: "\u4EF7\u683C:\u00A5" + item.price + "\u5143" })))) : react_1.default.createElement("div", { key: item.id, style: { height: 6.66667 * rootFontSize + "px" } })); })),
        props.lessons.hasMore ?
            react_1.default.createElement(antd_1.Button, { onClick: props.getLessons, style: { width: "100%" }, type: "ghost", loading: props.lessons.loading }, props.lessons.loading ? '' : '加载更多') :
            react_1.default.createElement(antd_1.Alert, { style: { textAlign: 'center' }, message: " \u5230\u5E95\u4E86", type: "warning" })));
}
exports.default = react_1.forwardRef(LessonList);
//# sourceMappingURL=index.js.map