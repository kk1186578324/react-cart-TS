"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connected_react_router_1 = require("connected-react-router");
var home_1 = __importDefault(require("./home"));
var mine_1 = __importDefault(require("./mine"));
var cart_1 = __importDefault(require("./cart"));
var profile_1 = __importDefault(require("./profile"));
var history_1 = __importDefault(require("@/history"));
var immer_1 = __importDefault(require("immer"));
var redux_immer_1 = require("redux-immer");
var reducers = {
    home: home_1.default,
    mine: mine_1.default,
    profile: profile_1.default,
    cart: cart_1.default,
    router: connected_react_router_1.connectRouter(history_1.default)
};
var rootReducer = redux_immer_1.combineReducers(immer_1.default, reducers);
exports.default = rootReducer;
//# sourceMappingURL=index.js.map