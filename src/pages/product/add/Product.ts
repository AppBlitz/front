import { instance } from "../../../service/api"
import { Products } from "../../../types/Product"

function saveProduct(product: Products) {
  instance.post("product/add", {
    data:
    {
      nameProduct: product.nameProduct,
      supplier: product.supplier,
      dateExpiration: product.dateExpiration,
      dateAdd: new Date().toLocaleTimeString(),
      weightProduct: product.weightProduct,
      amount: product.amount,
      priceProduct: product.priceProduct,
      image: product.image
    }

  })
}
export { saveProduct }
