import { categoryMock } from "../../category/__mocks__/category.mock";
import { ProductEntity } from "../entities/product.entity";

export const productMock: ProductEntity = {
    categoryId: categoryMock.id,
    createdAt: new Date(),
    id: 765,
    image: 'http://image.com',
    name: 'nameProduct Mock',
    price: 34.3,
    updatedAt: new Date()
}
