import { Header } from "../../../components";
import { useState, useEffect } from "react";
import { Product } from "../../../types/Product";
import axios from "axios";

function ProductCards() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8080/product/allProducts")
      .then((response) => {
        const formattedProducts = response.data.map((product: Product) => ({
          ...product,
          images: product.images || [],
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setProducts([]);
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(selectedProduct?.id === product.id ? null : product);
  };

  const handleEditProduct = (product: Product) => {
    console.log("Editar producto:", product);
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (product: Product) => {
    if (window.confirm(`¿Deseas eliminar el producto "${product.nameProduct}"?`)) {
      setProducts(products.filter((p) => p.id !== product.id));
      setSelectedProduct(null);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 text-black font-serif min-h-screen flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Lista de Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {Array.isArray(products) && products.map((product) => (
            <div
              key={product.id}
              className={`bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition ${selectedProduct?.id === product.id ? "border-violet-500" : "border-gray-300"}`}
            >
              <div onClick={() => handleSelectProduct(product)} className="cursor-pointer">
                <h2 className="text-lg font-semibold">{product.nameProduct}</h2>
                <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
                <p className="text-gray-500 text-sm">Precio: ${product.priceProduct}</p>
              </div>

              {selectedProduct?.id === product.id && (
                <div className="mt-4 text-sm">
                  <h3 className="font-medium">Detalles</h3>
                  <p>Fechas de Expiración:</p>
                  <ul className="list-disc list-inside">
                    {product.dateExpiration?.map((date, index) => (
                      <li key={index}>
                        {date} ({product.controldateExpiration?.[index] ?? "N/A"} días restantes)
                      </li>
                    )) || "No disponible"}
                  </ul>

                  {product.images.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium">Imágenes:</h4>
                      <div className="flex gap-2 overflow-x-auto">
                        {product.images.map((img, index) => (
                          <img key={index} src={img} alt={`Producto ${product.nameProduct} - ${index + 1}`} className="w-16 h-16 rounded object-cover" />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600" onClick={(e) => { e.stopPropagation(); handleEditProduct(product); }}>
                      Editar
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600" onClick={(e) => { e.stopPropagation(); handleDeleteProduct(product); }}>
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { ProductCards };
