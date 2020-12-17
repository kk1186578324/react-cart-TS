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
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("@/typings/state");
var actionTypes = __importStar(require("@/store/action-types"));
//profileState初始值
var initialState = {
    loginState: state_1.LOGIN_TYPES.UN_VALIDATE,
    user: null,
    error: null
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.VALIDATE:
            if (action.payload.success) {
                return {
                    loginState: state_1.LOGIN_TYPES.LOGINED,
                    user: action.payload.data,
                    error: null
                };
            }
            else {
                return {
                    loginState: state_1.LOGIN_TYPES.UN_LOGINED,
                    user: null,
                    error: action.payload
                };
            }
        case actionTypes.LOGOUT:
            return {
                loginState: state_1.LOGIN_TYPES.UN_LOGINED,
                user: null,
                error: null
            };
        case actionTypes.SET_AVATAR:
            return __assign(__assign({}, state), { user: __assign(__assign({}, state.user), { avatar: action.payload }) });
        default:
            break;
    }
    return state;
}
exports.default = default_1;
//# sourceMappingURL=profile.js.map