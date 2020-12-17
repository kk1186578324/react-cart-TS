"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTLE = exports.CHANGE_CHECKED_CART_ITEMS = exports.CHANGE_CART_ITEM_COUNT = exports.CLEAR_CART_ITEM = exports.REMOVE_CART_ITEM = exports.ADD_CART_ITEM = exports.REFRESH_LESSONS = exports.SET_LESSONS_LOADING = exports.SET_LESSONS = exports.GET_LESSONS = exports.GET_SLIDERS = exports.SET_AVATAR = exports.LOGOUT = exports.VALIDATE = exports.SET_CURRENT_CATEGORY = void 0;
exports.SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
exports.VALIDATE = 'VALIDATE';
exports.LOGOUT = 'LOGOUT';
exports.SET_AVATAR = 'SET_AVATAR';
exports.GET_SLIDERS = 'GET_SLIDERS';
exports.GET_LESSONS = 'GET_LESSONS'; // 派发一个函数，函数里要调用接口返回数据
exports.SET_LESSONS = 'SET_LESSONS'; //设置课程列表的数据到仓库中去
exports.SET_LESSONS_LOADING = 'SET_LESSONS_LOADING'; //把课程分状态的loading设置为给定的值
exports.REFRESH_LESSONS = 'REFRESH_LESSONS'; //下拉刷新的功能
exports.ADD_CART_ITEM = 'ADD_CART_ITEM'; //向购物车里添加一个商品
exports.REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'; //从购物车里删除一个商品
exports.CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'; //清空购物车商品
exports.CHANGE_CART_ITEM_COUNT = 'CHANGE_CART_ITEM_COUNT'; //修改购物车里某件商品的数量
exports.CHANGE_CHECKED_CART_ITEMS = 'CHANGE_CHECKED_CART_ITEMS'; //修改哪些商品被选中
exports.SETTLE = 'SETTLE'; //结算的时候，会把选中的商品添加到订单里去，从购物车中删除
//# sourceMappingURL=action-types.js.map