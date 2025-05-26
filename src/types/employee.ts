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
  roll: RollEmployee
  schedule: Partial<Record<DayOfWeek, Hora>>
}

type user = {
  email: string,
  password: string
}

enum RollEmployee {
    KITCHENEMPLOYEE = "KitchenEmployee",
    CASHIEREMPLOYEE = "CashierEmployee",
    WAREHOUSEEMPLOYEE = "WarehouseEmployee",
    WAITEREMPLOYEE = "waiterEmployee",
    DEFAULT = "DEFAULT",
    ADMIN = "ADMIN"
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
  roll: RollEmployee
  schedule: Partial<Record<DayOfWeek, Hora>>
}
export type { EmployeeCreate, user,Employee }
export { RollEmployee }
