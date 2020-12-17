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
var actionTypes = __importStar(require("@/store/action-types"));
var initialState = [];
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //向购物车里添加一个条目，如果已经有这个商品了，数量加1，如果没有则加一个条目
        case actionTypes.ADD_CART_ITEM: //{type:ADD_CART_ITEM,payload:lesson}
            var oldLesson = state.find(function (item) { return item.lesson.id === action.payload.id; });
            if (oldLesson) {
                oldLesson.count += 1;
            }
            else {
                state.push({ count: 1, checked: false, lesson: action.payload });
            }
            return state;
        case actionTypes.REMOVE_CART_ITEM: //{type:REMOVE_CART_ITEM,payload:id}
            var removeIndex = state.findIndex(function (item) { return item.lesson.id === action.payload; });
            if (removeIndex != -1) {
                state.splice(removeIndex, 1);
            }
            return state;
        case actionTypes.CLEAR_CART_ITEM: //清空购物车
            state.length = 0;
            return state;
        case actionTypes.CHANGE_CART_ITEM_COUNT: //{type:CHANGE_CART_ITEM_COUNT,payload:{id,count}}
            var changeIndex = state.findIndex(function (item) { return item.lesson.id === action.payload.id; });
            if (changeIndex != -1) {
                state[changeIndex].count = action.payload.count;
            }
            return state;
        //{type:CHANGE_CHECKED_CART_ITEMS,payload:[1,2,3]}
        case actionTypes.CHANGE_CHECKED_CART_ITEMS:
            var checkedIds_1 = action.payload;
            return state.map(function (item) {
                if (checkedIds_1.includes(item.lesson.id)) {
                    item.checked = true;
                }
                else {
                    item.checked = false;
                }
                return item;
            });
        case actionTypes.SETTLE:
            return state.filter(function (item) { return !item.checked; });
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=cart.js.map