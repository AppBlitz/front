

type Employee = {
  dni: string;
  nameEmployee: string;
  schedule: string;
  charge: string;
  baseSalary: number; // Salario base del empleado
  email: string; // Correo electrónico del empleado
  password: string; // Contraseña del empleado
  permisions: string[]; // Lista de permisos del empleado
  rollEmployee: string; // Rol asignado al empleado (ej. 'Empleado', 'Gerente', etc.)
};
export type { Employee }
