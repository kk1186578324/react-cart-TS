"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./store"));
var antd_1 = require("antd");
var zh_CN_1 = __importDefault(require("antd/lib/locale-provider/zh_CN"));
var Home_1 = __importDefault(require("./routes/Home"));
var Mine_1 = __importDefault(require("./routes/Mine"));
var Login_1 = __importDefault(require("./routes/Login"));
var Register_1 = __importDefault(require("./routes/Register"));
var Profile_1 = __importDefault(require("./routes/Profile"));
var Detail_1 = __importDefault(require("./routes/Detail"));
var Cart_1 = __importDefault(require("./routes/Cart"));
var connected_react_router_1 = require("connected-react-router");
var history_1 = __importDefault(require("@/history"));
require("./assets/style/common.less");
var Tabs_1 = __importDefault(require("@/components/Tabs"));
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
    react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history_1.default },
        react_1.default.createElement(antd_1.ConfigProvider, { locale: zh_CN_1.default },
            react_1.default.createElement("main", { className: "main-container" },
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/mine", exact: true, component: Mine_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/profile", exact: true, component: Profile_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/login", exact: true, component: Login_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/register", exact: true, component: Register_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/detail/:id", exact: true, component: Detail_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/cart", exact: true, component: Cart_1.default }))),
            react_1.default.createElement(Tabs_1.default, null)))), document.getElementById('root'));
//# sourceMappingURL=index.js.map