import { instance } from "../../../service/api";
import { EmployeeCreate } from "../../../types/employee";

function saveEmployee(employee: EmployeeCreate) {
  instance.post("", {
    nameEmployee: employee.nameEmployee
  })

}
export { saveEmployee }
