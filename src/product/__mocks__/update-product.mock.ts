import { categoryMock } from "src/category/__mocks__/category.mock";
import { UpdateProductDTO } from "../dtos/update-product.dto";

export const updateProductMock: UpdateProductDTO = {
    categoryId: categoryMock.id,
    image: 'imageMock',
    name: 'productNameMock',
    price: 455
}
