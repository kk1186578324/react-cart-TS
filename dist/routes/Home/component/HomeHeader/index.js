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
var logo = require('../../../../assets/images/header.png');
var classnames_1 = __importDefault(require("classnames"));
var react_transition_group_1 = require("react-transition-group");
require("./index.less");
var icons_1 = require("@ant-design/icons");
//如果是用require加载的话，返回值得defult属性才是那个图片地址
//如果非要用import如何解决
var duration = 1000;
//CSSProperties行内样式的对象定义
var defaultStyle = {
    transtion: "all " + duration + " ease-in-out",
    opacity: 0,
    display: 'none'
};
var transitionStyles = {
    entering: { opacity: 1, display: 'block' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'none' },
    exited: { opacity: 0, display: 'none' }
};
function HomeHeader(props) {
    var _a = react_1.useState(false), isMenuVisible = _a[0], setIsMenuVisible = _a[1];
    var setCurrentCategory = function (event) {
        var target = event.target;
        var category = target.dataset.category;
        props.setCurrentCategory(category);
        props.refreshLessons();
        setIsMenuVisible(false);
    };
    return (react_1.default.createElement("header", { className: "home-header" },
        react_1.default.createElement("div", { className: "logo-header" },
            react_1.default.createElement("img", { alt: "" }),
            react_1.default.createElement(icons_1.UnorderedListOutlined, { className: "unorder-list", onClick: function () { return setIsMenuVisible(!isMenuVisible); } })),
        react_1.default.createElement(react_transition_group_1.Transition, { in: isMenuVisible, timeout: duration }, function (state) { return (react_1.default.createElement("ul", { className: "category", onClick: setCurrentCategory, style: __assign(__assign({}, defaultStyle), transitionStyles[state]) },
            react_1.default.createElement("li", { "data-category": "", className: classnames_1.default({ active: props.currentCategory === '' }) }, "\u5168\u90E8\u8BFE\u7A0B"),
            react_1.default.createElement("li", { "data-category": "React", className: classnames_1.default({ active: props.currentCategory === 'React' }) }, "react"),
            react_1.default.createElement("li", { "data-category": "Vue", className: classnames_1.default({ active: props.currentCategory === 'Vue' }) }, "vue\u8BFE\u7A0B"),
            react_1.default.createElement("li", { "data-category": "Webpack", className: classnames_1.default({ active: props.currentCategory === 'Webpack' }) }, "webpack\u8BFE\u7A0B"))); })));
}
exports.default = HomeHeader;
//# sourceMappingURL=index.js.map