
import Navbar from "../../../components/sales_components/navbars/navbar_home_admin";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Products } from "../../../types/Product";
import { MovementForm } from "../movement/index";
import { instance } from "../../../service/api";

function ProductCards() {

  const location = useLocation();
  const navigate = useNavigate(); // Inicializamos useNavigate
  const queryParams = new URLSearchParams(location.search);
  const userRole = queryParams.get("role");
  const token = queryParams.get("token");
  const userId = queryParams.get("id");

    // Redirigir si no hay role
  useEffect(() => {
    if (!userRole||userRole=="") {
      navigate("/"); // Redirige a la página de login
    }
  }, [userRole, navigate]);


  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [productToMove, setProductToMove] = useState<Products | null>(null);


  const handleRegisterMovement = (product: Products) => {
    setProductToMove(product);
    setShowModal(true);
  };

  useEffect(() => {
    instance.get("product/allProducts")
      .then((response) => {
        const formattedProducts = response.data.map((product: Products) => ({
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

  const handleSelectProduct = (product: Products) => {
    setSelectedProduct(selectedProduct?.id === product.id ? null : product);
  };

  const handleEditProduct = (product: Products) => {
    console.log("Editar producto:", product);
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (product: Products) => {
    if (window.confirm(`¿Deseas eliminar el producto "${product.nameProduct}"?`)) {
      instance.delete(`product/delete/${product.id}`)
      setProducts(products.filter((p) => p.id !== product.id));
      setSelectedProduct(null);
    }
  };


  return (
    <>
      <Navbar userRole= {userRole||""} userId={userId||""} token={token||""}/>
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

                  <div className="flex justify-between mt-4 gap-2 flex-wrap">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditProduct(product);
                        setShowEditModal(true);
                      }}
                    >
                      Editar
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600" onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProduct(product);
                    }}>Eliminar</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600" onClick={(e) => {
                      e.stopPropagation();
                      handleRegisterMovement(product);
                    }}>Registrar Movimiento</button>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showModal && productToMove && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MovementForm productId={productToMove.id} onClose={() => setShowModal(false)} />
            <div className="mt-4 text-right">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => setShowModal(false)}>
                Cerrar </button>
            </div>
          </div>
        </div>
      )
      }
      {showEditModal && selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const price = parseFloat((form.elements.namedItem("price") as HTMLInputElement).value);
          const weight = parseFloat((form.elements.namedItem("weight") as HTMLInputElement).value);

          try {
            await instance.put("product/updateAmount", {
              nameProduct: selectedProduct.nameProduct,
              priceProduct: price,
              weightProduct: weight,
            });
            // Actualizar localmente
            setProducts((prev) =>
              prev.map((p) =>
                p.id === selectedProduct.id
                  ? { ...p, priceProduct: price, weightProduct: weight }
                  : p
              )
            );
            setShowEditModal(false);
          } catch (error) {
            console.error("Error al editar el producto:", error);
          }
        }}
      >
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Precio:</label>
            <input
              type="number"
              name="price"
              required
              step="0.01"
              defaultValue={selectedProduct.priceProduct}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Peso:</label>
            <input
              type="number"
              name="weight"
              required
              step="0.01"
              defaultValue={selectedProduct.weightProduct}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setShowEditModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}

  

    </>
  );
}

export { ProductCards };
