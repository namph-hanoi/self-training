"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.default = common_1.createParamDecorator((data, ctx) => {
    console.log(["data: string, ctx: ExecutionContext", data, ctx]);
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    debugger;
    return data ? user && user[data] : user;
});
//# sourceMappingURL=mockup.decorator.js.map