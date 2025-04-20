
import { useState, useEffect } from "react";
import { Header } from "../../../components";
import { Supplier } from "../../../types/supplier";
import { instance } from "../../../service/api";
import axios from "axios";

const formatDate = (date: string | Date): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return parsedDate.toLocaleDateString("en-CA"); // Formato estándar ISO
};

function SupplierTable() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        //const response = await instance.get("supplier/all");
        const response = await axios.get(`http://localhost:8080/supplier/all`)

        const data = response.data.map((supplier: Supplier) => ({
          ...supplier,
          orderDate: new Date(supplier.orderDate),
        }));
        setSuppliers(data);
      } catch (error) {
        console.error("Error al cargar proveedores:", error);
      }
    };

    fetchSuppliers();
  });

  const handleSelectSupplier = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setEditingSupplier(null);
  };

  const handleUpdateSupplier = (supplier: Supplier) => {
    setEditingSupplier({ ...supplier });
    setSelectedSupplier(null);
  };

  const handleSaveChanges = async (updatedSupplier: Supplier) => {
    try {
      let state: string = "";
      if (updatedSupplier.stateActivity === "INACTIVO") {
        state = "INACTIVO";
      }
      else {
        state = "ACTIVO"
      }
      await instance.put("supplier/edit", {
        id: updatedSupplier.id,
        nameSupplier: updatedSupplier.nameSupplier,
        location: updatedSupplier.location,
        orderDate: updatedSupplier.orderDate,
        offeredProducts: updatedSupplier.offeredProducts,
        stateActivity: state
      });

      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier.id === updatedSupplier.id ? updatedSupplier : supplier
        )
      );
      console.log("Proveedor actualizado:", updatedSupplier);
      setEditingSupplier(null);
    } catch (error) {
      console.error("Error al actualizar proveedor:", error);
    }
  };

  const handleDeleteSupplier = async (id: String) => {
    try {
      await instance.delete("supplier/delete/" + id);
      setSuppliers((prevSuppliers) =>
        prevSuppliers.filter((supplier) => supplier.id !== id)
      );
      console.log("Proveedor eliminado:", id);
    } catch (error) {
      console.error("Error al eliminar proveedor:", error);
    }
  };
  function verificationState() {
    console.log(selectedSupplier?.stateActivity)
    if (selectedSupplier?.stateActivity === "INACTIVO") {
      return "Inactivo";
    }
    else {
      return "Activo";
    }
  }
  const handleAddSupplier = () => {
    console.log("Agregar nuevo proveedor");
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 text-black font-serif">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-xl w-full md:w-3/4 lg:w-2/3 p-6">
            <h2 className="text-lg text-black">Lista de Proveedores</h2>

            <table className="table-auto w-full mt-6 border-collapse">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border px-4 py-2 text-left">Nombre</th>
                  <th className="border px-4 py-2 text-left">Ubicación</th>
                  <th className="border px-4 py-2 text-left">Fecha de Pedido</th>
                  <th className="border px-4 py-2 text-left">Estado</th>
                  <th className="border px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier) => (
                  <tr
                    key={supplier.id}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectSupplier(supplier)}
                  >
                    <td className="border px-4 py-2">{supplier.nameSupplier}</td>
                    <td className="border px-4 py-2">{supplier.location}</td>
                    <td className="border px-4 py-2">{formatDate(supplier.orderDate)}</td>
                    <td className="border px-4 py-2">{supplier.stateActivity}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateSupplier(supplier);
                        }}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSupplier(supplier.id);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedSupplier && !editingSupplier && (
              <div className="mt-6 p-4 border bg-gray-100 rounded-lg">
                <h3 className="text-lg text-black">Detalles del Proveedor</h3>
                <p><strong>Nombre:</strong> {selectedSupplier.nameSupplier}</p>
                <p><strong>Ubicación:</strong> {selectedSupplier.location}</p>
                <p><strong>Fecha de Pedido:</strong> {formatDate(selectedSupplier.orderDate)}</p>
                <p><strong>Productos Ofrecidos:</strong> {selectedSupplier.offeredProducts.join(", ")}</p>
                <p><strong>Estado:</strong>{verificationState()} </p>
              </div>
            )}

            {editingSupplier && (
              <div className="mt-6 p-4 border bg-gray-100 rounded-lg">
                <h3 className="text-lg text-black">Editar Proveedor</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveChanges(editingSupplier);
                  }}
                >
                  <label className="block mt-2">Nombre:</label>
                  <input
                    type="text"
                    value={editingSupplier.nameSupplier}
                    onChange={(e) =>
                      setEditingSupplier({ ...editingSupplier, nameSupplier: e.target.value })
                    }
                    className="border rounded px-4 py-2 w-full"
                  />

                  <label className="block mt-4">Ubicación:</label>
                  <input
                    type="text"
                    value={editingSupplier.location}
                    onChange={(e) =>
                      setEditingSupplier({ ...editingSupplier, location: e.target.value })
                    }
                    className="border rounded px-4 py-2 w-full"
                  />

                  <label className="block mt-4">Fecha de Pedido:</label>
                  <input
                    type="date"
                    value={formatDate(editingSupplier.orderDate)}
                    onChange={(e) =>
                      setEditingSupplier({
                        ...editingSupplier,
                        orderDate: new Date(e.target.value),
                      })
                    }
                    className="border rounded px-4 py-2 w-full"
                  />

                  <label className="block mt-4">Productos Ofrecidos:</label>
                  <input
                    type="text"
                    value={editingSupplier.offeredProducts.join(", ")}
                    onChange={(e) =>
                      setEditingSupplier({
                        ...editingSupplier,
                        offeredProducts: e.target.value.split(","),
                      })
                    }
                    className="border rounded px-4 py-2 w-full"
                  />

                  <label className="block mt-4">Estado:</label>
                  <select
                    value={editingSupplier.stateActivity}
                    onChange={(e) =>
                      setEditingSupplier({
                        ...editingSupplier,
                        stateActivity: e.target.value as "ACTIVO" | "INACTIVO",
                      })
                    }
                    className="border rounded px-4 py-2 w-full"
                  >
                    <option value="ACTIVO">Activo</option>
                    <option value="INACTIVO">Inactivo</option>
                  </select>

                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setEditingSupplier(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-full mr-2"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-full"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={handleAddSupplier}
                className="bg-green-500 text-white px-6 py-2 rounded-full"
              >
                Agregar Proveedor
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SupplierTable };
