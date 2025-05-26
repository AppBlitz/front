import { instance } from "../../../service/api";
import { EmployeeCreate } from "../../../types/employee";
import { AxiosError } from "axios";


async function saveEmployee(employee: EmployeeCreate): Promise<{ success: boolean; message: string }> {
  try {
    const salary: number = Number(employee.baseSalary);
    if (isNaN(salary)) {
      return { success: false, message: "El salario base no es un número válido." };
    }

    await instance.post("employees/", {
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

    return { success: true, message: "Empleado guardado correctamente." };
  } catch (error: unknown) {
    let msg = "Error al guardar el empleado.";
    
    if (error instanceof AxiosError && error.response) {
      msg = (error.response.data as { message?: string })?.message || msg;
    }

    return { success: false, message: msg };
  }
}

export { saveEmployee }
