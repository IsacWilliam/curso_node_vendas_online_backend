import { UpdatePasswordDTO } from "../dtos/update-password.dto";

export const updatePasswordMock: UpdatePasswordDTO = {
    lastPassword: '123',
    newPassword: '321'
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
    lastPassword: 'abc',
    newPassword: '321'
};
