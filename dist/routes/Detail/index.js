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
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var Nav_1 = __importDefault(require("@/components/Nav"));
var antd_1 = require("antd");
var config_1 = require("@/config");
var home_1 = require("@/api/home");
var cart_1 = __importDefault(require("@/store/actions/cart"));
require("./index.less");
var icons_1 = require("@ant-design/icons");
var Meta = antd_1.Card.Meta;
function Detail(props) {
    var _a = react_1.useState({}), lesson = _a[0], setLesson = _a[1];
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var lesson, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lesson = props.location.state;
                            if (!!lesson) return [3 /*break*/, 2];
                            return [4 /*yield*/, home_1.getLesson(props.match.params.id)];
                        case 1:
                            result = _a.sent();
                            if (result.success) {
                                lesson = result.content;
                            }
                            _a.label = 2;
                        case 2:
                            setLesson(lesson);
                            return [2 /*return*/];
                    }
                });
            });
        })();
    }, []);
    var addCartItem = react_1.useCallback(function (lesson) {
        var cover = document.querySelector('.ant-card-cover');
        var coverLeft = cover.getBoundingClientRect().left; //距离左边的距离
        var coverTop = cover.getBoundingClientRect().top; //顶部距离
        var coverWidth = cover.offsetWidth; //购物车图标宽度
        var coverHeight = cover.offsetHeight; //购物车图标高度
        var cart = document.querySelector('a .anticon.anticon-shopping-cart');
        var cartWidth = cart.offsetWidth; //购物车图标宽度
        var cartHeight = cart.offsetHeight; //购物车图标高度
        var cartRight = cart.getBoundingClientRect().right; //距离右边的距离
        var cartBottom = cart.getBoundingClientRect().bottom; //距离顶部的距离
        var clonedCover = cover.cloneNode(true);
        clonedCover.style.cssText = ("\n              z-index:1000;\n              opacity:.8;\n              position:fixed;\n              width:" + coverWidth + "px;\n              height:" + coverHeight + "px;\n              top:" + coverTop + "px;\n              left:" + coverLeft + "px;\n              transition: all 2s ease-in-out;\n            ");
        document.body.appendChild(clonedCover);
        setTimeout(function () {
            clonedCover.style.left = cartRight - cartWidth / 2 + "px";
            clonedCover.style.top = cartBottom - cartHeight / 2 + "px";
            clonedCover.style.width = '0px';
            clonedCover.style.height = '0px';
            clonedCover.style.opacity = '.5';
        }, 0);
        setTimeout(function () {
            clonedCover.parentNode.removeChild(clonedCover);
        }, 2000);
        props.addCartItem(lesson);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Nav_1.default, { history: props.history }, "\u8BFE\u7A0B\u8BE6\u60C5"),
        react_1.default.createElement(antd_1.Card, { hoverable: true, style: { width: '100%' }, cover: react_1.default.createElement("img", { src: "" + config_1.config.img_url + lesson.image }) },
            react_1.default.createElement(Meta, { title: lesson.title, description: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null, "\u4EF7\u683C:\uFFE5" + lesson.price + "\u5143"),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.ShoppingCartOutlined, null), className: "add-cart", onClick: function () { return addCartItem(lesson); } }, "\u52A0\u5165\u8D2D\u7269\u8F66"))) }))));
}
exports.default = react_redux_1.connect(function (state) { return state; }, cart_1.default)(Detail);
//# sourceMappingURL=index.js.map