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
var antd_1 = require("antd");
exports.default = {
    addCartItem: function (lesson) {
        return function (dispatch) {
            dispatch({
                type: actionTypes.ADD_CART_ITEM,
                payload: lesson
            });
            antd_1.message.info('添加购物车成功');
        };
    },
    changeCartItemCount: function (id, count) {
        return {
            type: actionTypes.CHANGE_CART_ITEM_COUNT,
            payload: { id: id, count: count }
        };
    },
    removeCartItem: function (id, count) {
        return {
            type: actionTypes.REMOVE_CART_ITEM,
            payload: id
        };
    },
    changeCheckedCartItems: function (checkIds) {
        return {
            type: actionTypes.CHANGE_CHECKED_CART_ITEMS,
            payload: checkIds
        };
    },
    clearCartItems: function () {
        return {
            type: actionTypes.CLEAR_CART_ITEM
        };
    },
    settle: function () {
        return {
            type: actionTypes.SETTLE
        };
    }
};
//# sourceMappingURL=cart.js.map