"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLesson = exports.getLessons = exports.getSliders = void 0;
var index_1 = __importDefault(require("./index"));
function getSliders() {
    return index_1.default.post("/banner/list");
}
exports.getSliders = getSliders;
/**
* @param
*currentCategory  获取哪个分类下面的课程列表 all 是全部 react vue
 * page
 * limit
* */
function getLessons(classify, page, pageSize) {
    if (classify === void 0) { classify = ''; }
    return index_1.default.post("/books/list", {
        classify: classify,
        page: page,
        pageSize: pageSize
    });
}
exports.getLessons = getLessons;
function getLesson(id) {
    return index_1.default.get("/books/detail/" + id);
}
exports.getLesson = getLesson;
//# sourceMappingURL=home.js.map