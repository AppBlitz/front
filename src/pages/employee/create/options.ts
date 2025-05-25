import { instance } from "../../../service/api";
import { EmployeeCreate } from "../../../types/employee";

async function saveEmployee(employee: EmployeeCreate) {
  try {
    console.log("Datos del empleado", employee);

    const salary: number = Number(employee.baseSalary);
    if (isNaN(salary)) {
      throw new Error("El salario base no es un número válido.");
    }
    console.log(employee)

    await instance.post("http://localhost:8080/employees/add", {
      nameEmployee: employee.nameEmployee,
      address: employee.address,
      city: employee.city,
      phoneNumber: employee.phoneNumber,
      entryDate: employee.entryDate,
      retirementDate: "",
      isRetired: employee.isRetired,
      baseSalary: salary,
      roll: employee.roll,
      email: employee.email,
      password: employee.password
    });

    console.log("Empleado guardado correctamente.");
  } catch (error) {
    console.error("Error al guardar el empleado:", error);
  }
}

export { saveEmployee }
