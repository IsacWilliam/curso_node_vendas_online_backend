import { cityMock } from "../../city/__mocks__/city.mock";
import { AddressEntity } from "../entities/address.entity";
import { userEntityMock } from "../../user/__mocks__/user.mock";

export const addressMock: AddressEntity = {
    cep: '35681858',
    cityId: cityMock.id,
    complement: 'edetbfhn',
    createdAt: new Date(),
    id: 56895,
    numberAddress: 153,
    updatedAt: new Date(),
    userId: userEntityMock.id
}
