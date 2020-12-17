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
var antd_1 = require("antd");
var config_1 = require("@/config");
function HomeSliders(props) {
    react_1.useEffect(function () {
        if (props.sliders.length === 0) {
            var result = props.getSliders();
            console.log('HomeSliders', props.sliders, result);
        }
    }, []);
    return (react_1.default.createElement(antd_1.Carousel, { autoplay: true, effect: "scrollx", draggable: false, touchMove: false }, props.sliders.map(function (item, index) { return (react_1.default.createElement("div", { key: index },
        react_1.default.createElement("img", { src: "" + config_1.config.img_url + item.url, alt: "" }))); })));
}
exports.default = HomeSliders;
//# sourceMappingURL=index.js.map