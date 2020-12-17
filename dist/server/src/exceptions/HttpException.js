"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    //status HTTP错误状态码  message是错误提示信息 errors 错误对象
    function HttpException(status, message, errors) {
        if (errors === void 0) { errors = {}; }
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        _this.errors = errors;
        return _this;
    }
    return HttpException;
}(Error));
exports.default = HttpException;
//# sourceMappingURL=HttpException.js.map