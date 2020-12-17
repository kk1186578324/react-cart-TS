"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Nav_1 = __importDefault(require("@/components/Nav"));
var antd_1 = require("antd");
var cart_1 = __importDefault(require("@/store/actions/cart"));
var Meta = antd_1.Card.Meta;
function Cart(props) {
    var columns = [
        {
            title: '商品',
            dataIndex: 'lesson',
            render: function (val, row) {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null, val.title),
                    react_1.default.createElement("p", null,
                        "\u5355\u4EF7: \u00A5",
                        val.price,
                        "\u5143")));
            }
        },
        {
            title: '数量',
            dataIndex: 'count',
            render: function (val, row) {
                return (react_1.default.createElement(antd_1.InputNumber, { size: "small", min: 1, value: val, onChange: function (value) { return props.changeCartItemCount(row.lesson.id, value); } }));
            }
        },
        {
            title: '操作',
            render: function (val, row) {
                return (react_1.default.createElement(antd_1.Popconfirm, { title: "\u662F\u5426\u8981\u5220\u9664\u5546\u54C1", onConfirm: function () { return props.removeCartItem(row.lesson.id); }, okText: "\u662F", cancelText: "\u5426" },
                    react_1.default.createElement(antd_1.Button, { size: "small", type: "primary" }, "\u5220\u9664")));
            }
        }
    ];
    var rowSelection = {
        selectedRowKeys: props.cart.filter(function (item) { return item.checked; }).map(function (item) { return item.lesson.id; }),
        onChange: function (selectedRowKeys) {
            //selectedRowKeys其实是一个由商品的ID组成的数组
            props.changeCheckedCartItems(selectedRowKeys);
        }
    };
    var totalCount = props.cart
        .filter(function (item) { return item.checked; })
        .reduce(function (total, item) { return total + item.count; }, 0);
    var totalPrice = props.cart
        .filter(function (item) { return item.checked; })
        .reduce(function (total, item) { return total + item.count * item.lesson.price; }, 0);
    return (react_1.default.createElement("div", { className: "cart" },
        react_1.default.createElement(Nav_1.default, { history: props.history }, "\u8D2D\u7269\u8F66"),
        react_1.default.createElement(antd_1.Table, { columns: columns, dataSource: props.cart, pagination: false, rowKey: function (row) { return row.lesson.id; }, rowSelection: rowSelection }),
        react_1.default.createElement(antd_1.Row, { style: { padding: '5px' } },
            react_1.default.createElement(antd_1.Col, { span: 4 },
                react_1.default.createElement(antd_1.Button, { type: "danger", size: "small", onClick: props.clearCartItems }, "\u6E05\u7A7A")),
            react_1.default.createElement(antd_1.Col, { span: 7 },
                "\u5DF2\u9009\u62E9\u4E86",
                totalCount > 0 ? react_1.default.createElement(antd_1.Badge, { count: totalCount }) : 0,
                "\u4EF6\u5546\u54C1"),
            react_1.default.createElement(antd_1.Col, { span: 9 },
                "\u603B\u4EF7 \u00A5",
                totalPrice,
                "\u5143"),
            react_1.default.createElement(antd_1.Col, { span: 4 },
                react_1.default.createElement(antd_1.Button, { type: "primary", size: "small", onClick: props.settle }, "\u7ED3\u7B97")))));
}
var mapStateToProps = function (state) { return ({ cart: state.cart }); };
exports.default = react_redux_1.connect(mapStateToProps, cart_1.default)(Cart);
//# sourceMappingURL=index.js.map