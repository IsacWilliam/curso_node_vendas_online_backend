import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common/decorators";
import { authorizationToLoginPayload } from "../utils/base-64-converter";

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
    const { authorization } = ctx.switchToHttp().getRequest().headers;

    const loginPayload = authorizationToLoginPayload(authorization);

    //console.log('authorization: ', authorization);

    return loginPayload?.id;
});
