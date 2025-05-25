type EmployeeCreate = {
  nameEmployee: string
  address: string
  city: string
  phoneNumber: string
  entryDate: string
  retirementDate: string
  isRetired: boolean
  baseSalary: number
  email: string
  password: string
  roll: roll
  schedule: Partial<Record<DayOfWeek, Hora>>
}
type roll = {
  rollEmployee: RollEmployee
}
type user = {
  email: string,
  password: string
}

enum RollEmployee {
  KITCHENEMPLOYEE = "KITCHENEMPLOYEE",
  CASHIEREMPLOYE = "CASHIEREMPLOYE",
  WAREHOUSEEMPLOYEE = "WAREHOUSEEMPLOYEE"
}
enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

type Hora = {
  startTime: string // formato "HH:mm"
  endTime: string   // formato "HH:mm"
}

type Employee = {
  id:string
  nameEmployee: string
  address: string
  city: string
  phoneNumber: string
  entryDate: string
  retirementDate: string
  isRetired: boolean
  baseSalary: number
  email: string
  password: string
  roll: roll
  schedule: Partial<Record<DayOfWeek, Hora>>
}
export type { EmployeeCreate, user,Employee }
export { RollEmployee }
