import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    id: 23456,
    name: 'nameMock',
    email: 'email@mock.com',
    phone: '37999998888',
    cpf: '01234567890',
    password: 'mockPass',
    typeUser: UserType.USER,
    createdAt: new Date(),
    updatedAt: new Date()
}
