import { cartMock } from "../../cart/__mocks__/cart.mock";
import { CartProductEntity } from "../entities/cart-product.entity";
import { productMock } from "../../product/__mocks__/product.mock";

export const cartProductMock: CartProductEntity = {
    amount: 535,
    cartId: cartMock.id,
    createdAt: new Date(),
    id: 213,
    productId: productMock.id,
    updatedAt: new Date()
}
