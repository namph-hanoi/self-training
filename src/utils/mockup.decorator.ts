import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export default createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
  console.log(["data: string, ctx: ExecutionContext", data, ctx])
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    debugger;
    return data ? user && user[data] : user;
  },
);