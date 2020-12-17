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
var HomeHeader_1 = __importDefault(require("./component/HomeHeader"));
var home_1 = __importDefault(require("@/store/actions/home"));
var HomeSliders_1 = __importDefault(require("./component/HomeSliders"));
var LessonList_1 = __importDefault(require("./component/LessonList"));
var loadMore_1 = require("@/utils/loadMore");
var antd_1 = require("antd");
function Home(props) {
    var homeContainer = react_1.useRef(null);
    var lessonList = react_1.useRef(null);
    react_1.useEffect(function () {
        loadMore_1.loadMore(homeContainer.current, props.getLessons);
        loadMore_1.downRefresh(homeContainer.current, props.refreshLessons);
        homeContainer.current.addEventListener('scroll', lessonList.current);
        if (props.lessons.list.length > 0) {
            homeContainer.current.scrollTop = parseFloat(localStorage.getItem('homeScrollTop'));
        }
        return function () {
            localStorage.setItem('homeScrollTop', homeContainer.current.scrollTop + '');
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(HomeHeader_1.default, { currentCategory: props.classify, setCurrentCategory: props.setCurrentCategory, refreshLessons: props.refreshLessons }),
        react_1.default.createElement("div", { className: "refresh-loading" },
            react_1.default.createElement(antd_1.Spin, { size: "large" })),
        react_1.default.createElement("div", { className: "home-container", ref: homeContainer },
            react_1.default.createElement(HomeSliders_1.default, { sliders: props.sliders, getSliders: props.getSliders }),
            react_1.default.createElement(LessonList_1.default, { ref: lessonList, container: homeContainer, lessons: props.lessons, getLessons: props.getLessons }))));
}
var mapStateToProps = function (state) { return state.home; };
exports.default = react_redux_1.connect(mapStateToProps, home_1.default)(Home);
/**
* @param
* 因为此组件是由路由渲染出来的
 * 所以属性对象会包括路由属性
 * 另外此组件需要连接仓库
* */
//# sourceMappingURL=index.js.map