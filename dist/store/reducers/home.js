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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = __importStar(require("@/store/action-types"));
var initialState = {
    classify: '',
    sliders: [],
    lessons: {
        loading: false,
        list: [],
        hasMore: true,
        page: 1,
        pageSize: 5 //限定每次拉的条数
    }
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return __assign(__assign({}, state), { classify: action.payload });
        case actionTypes.GET_SLIDERS:
            return __assign(__assign({}, state), { sliders: action.payload.content });
        case actionTypes.SET_LESSONS_LOADING:
            //redux规定reducer永远要返回一个新的状态
            state.lessons.loading = action.payload;
            return state;
        case actionTypes.SET_LESSONS:
            return __assign(__assign({}, state), { lessons: __assign(__assign({}, state.lessons), { loading: false, list: __spreadArrays(state.lessons.list, action.payload.list), hasMore: action.payload.hasMore, page: state.lessons.page + 1 }) });
        case actionTypes.REFRESH_LESSONS:
            state.lessons.loading = false;
            state.lessons.list = action.payload.list;
            state.lessons.hasMore = action.payload.hasMore;
            state.lessons.page = 1;
            return state;
        default:
            return state;
    }
    return state;
}
exports.default = default_1;
//# sourceMappingURL=home.js.map