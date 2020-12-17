"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = __importDefault(require("redux-logger"));
var redux_promise_1 = __importDefault(require("redux-promise"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var connected_react_router_1 = require("connected-react-router");
var reducers_1 = __importDefault(require("./reducers"));
var history_1 = __importDefault(require("@/history"));
// let store = createStore();
//promise和thunk中间件
//promise 可让我们派发promise，thunk让我们可以派发函数
var store = redux_1.applyMiddleware(connected_react_router_1.routerMiddleware(history_1.default), redux_promise_1.default, redux_thunk_1.default, redux_logger_1.default)(redux_1.createStore)(reducers_1.default);
exports.default = store;
//# sourceMappingURL=index.js.map