
import { useState } from "react";
import { Header } from "../../components";
import { Employee } from "../../types/employee"; // Suponiendo que tienes un tipo para empleado

// Componente para mostrar la tabla de empleados
function EmployeeTable() {
  // Datos de ejemplo de empleados (estos datos podrían venir de una API o estado global)
  const [employees, setEmployees] = useState<Employee[]>([
    {
      dni: "123456789",
      nameEmployee: "Juan Pérez",
      schedule: "9:00 AM - 5:00 PM",
      charge: "Camarero",
      baseSalary: 1500.0,
      email: "juan@restaurant.com",
      password: "****",
      permisions: ["Ver menú", "Tomar pedidos"],
      rollEmployee: "Empleado",
    },
    {
      dni: "987654321",
      nameEmployee: "María García",
      schedule: "10:00 AM - 6:00 PM",
      charge: "Chef",
      baseSalary: 2500.0,
      email: "maria@restaurant.com",
      password: "****",
      permisions: ["Cocinar", "Gestionar cocina"],
      rollEmployee: "Gerente",
    },
  ]);

  // Selección de un empleado
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  // Estado de edición
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Función para manejar la selección de un empleado
  const handleSelectEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  // Función para manejar la edición de un empleado
  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  // Función para manejar el cambio en los campos de edición
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (editingEmployee) {
      setEditingEmployee({
        ...editingEmployee,
        [field]: e.target.value,
      });
    }
  };

  // Función para guardar los cambios de un empleado
  const handleSaveEmployee = () => {
    if (editingEmployee) {
      // Aquí podrías hacer un llamado a la API para actualizar los datos
      console.log("Empleado actualizado:", editingEmployee);
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.dni === editingEmployee.dni ? editingEmployee : emp
        )
      );
      setEditingEmployee(null); // Volver al modo de solo ver
    }
  };

  // Función para eliminar un empleado
  const handleDeleteEmployee = (dni: string) => {
    setEmployees(employees.filter((employee) => employee.dni !== dni));
  };

  // Agregar nuevo empleado (sin acción definida)
  const handleAddEmployee = () => {
    console.log("Agregar nuevo empleado");
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 text-black font-serif">
        <div className="flex justify-center items-center min-h-screen py-6 px-4">
          <div className="bg-white rounded-xl w-full max-w-6xl p-6 shadow-lg">
            <h2 className="text-lg text-black mb-6 text-center">Lista de Empleados</h2>

            {/* Tabla de empleados */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="border px-6 py-3 text-left">DNI</th>
                    <th className="border px-6 py-3 text-left">Nombre</th>
                    <th className="border px-6 py-3 text-left">Posición</th>
                    <th className="border px-6 py-3 text-left">Horario</th>
                    <th className="border px-6 py-3 text-left">Salario Base</th>
                    <th className="border px-6 py-3 text-left">Email</th>
                    <th className="border px-6 py-3 text-left">Permisos</th>
                    <th className="border px-6 py-3 text-left">Rol</th>
                    <th className="border px-6 py-3 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr
                      key={employee.dni}
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectEmployee(employee)}
                    >
                      <td className="border px-6 py-4">{employee.dni}</td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="text"
                            value={editingEmployee.nameEmployee}
                            onChange={(e) => handleChange(e, "nameEmployee")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.nameEmployee
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="text"
                            value={editingEmployee.charge}
                            onChange={(e) => handleChange(e, "charge")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.charge
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="text"
                            value={editingEmployee.schedule}
                            onChange={(e) => handleChange(e, "schedule")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.schedule
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="number"
                            value={editingEmployee.baseSalary}
                            onChange={(e) => handleChange(e, "baseSalary")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          `$${employee.baseSalary}`
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="email"
                            value={editingEmployee.email}
                            onChange={(e) => handleChange(e, "email")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.email
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="text"
                            value={editingEmployee.permisions.join(", ")}
                            onChange={(e) => handleChange(e, "permisions")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.permisions.join(", ")
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <input
                            type="text"
                            value={editingEmployee.rollEmployee}
                            onChange={(e) => handleChange(e, "rollEmployee")}
                            className="w-full border rounded p-1"
                          />
                        ) : (
                          employee.rollEmployee
                        )}
                      </td>
                      <td className="border px-6 py-4">
                        {editingEmployee?.dni === employee.dni ? (
                          <button
                            onClick={handleSaveEmployee}
                            className="bg-green-500 text-white px-4 py-2 rounded-full"
                          >
                            Guardar
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEditEmployee(employee)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full"
                          >
                            Editar
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteEmployee(employee.dni)}
                          className="bg-red-500 text-white px-4 py-2 rounded-full ml-2"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Detalles del empleado seleccionado */}
            {selectedEmployee && (
              <div className="mt-6 p-4 border bg-gray-100 rounded-lg">
                <h3 className="text-lg text-black mb-4">Detalles del Empleado</h3>
                <p><strong>DNI:</strong> {selectedEmployee.dni}</p>
                <p><strong>Nombre:</strong> {selectedEmployee.nameEmployee}</p>
                <p><strong>Horario:</strong> {selectedEmployee.schedule}</p>
                <p><strong>Cargo:</strong> {selectedEmployee.charge}</p>
                <p><strong>Salario Base:</strong> ${selectedEmployee.baseSalary}</p>
                <p><strong>Email:</strong> {selectedEmployee.email}</p>
                <p><strong>Permisos:</strong> {selectedEmployee.permisions.join(", ")}</p>
                <p><strong>Rol:</strong> {selectedEmployee.rollEmployee}</p>
              </div>
            )}

            {/* Botón Agregar */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleAddEmployee}
                className="bg-green-500 text-white px-6 py-2 rounded-full"
              >
                Agregar Empleado
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { EmployeeTable };
