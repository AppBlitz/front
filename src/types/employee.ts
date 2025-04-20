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
  cesantias: Cesantias
  pension: Pension
  riskLevel: RiskLevel
  ccf: CCF
  arl: ARL
  area: AREA
  eps: EPS
  roll: roll
}
type roll = {
  rollEmployee: RollEmployee
  permissions: PermissionsEmployee[]
}
type user = {
  email: string,
  password: string
}
type PermissionsEmployee = {
  permissions: Permisions[]
  objeto: Objeto
}
enum Cesantias {
  PROVENIR = "PORVENIR",
  COLFONDOS = "COLFONDOS",
  FNA = "FNA",
  PROTECCION = "PROTECCION"
}
enum Pension {
  COLPENSIONES = "COLPENSIONES",
  PORVENIR = "PROVENIR",
  PROTECCION = "PROTECCION"
}
enum RiskLevel {
  LEVEL_I = "LEVEL_I",
  LEVEL_II = "LEVEL_II",
  LEVEL_III = "LEVEL_III",
  LEVEL_IV = "LEVEL_IV",
  LEVEL_V = "LEVEL_V"
}

export enum CCF {
  COMFENALCO_QUINDIO = "COMFENALCO_QUINDIO",
  COMFENALCO_ANTIOQUIA = "COMFENALCO_ANTIOQUIA",
  COMFAMA = "COMFAMA",
  CAFAM = "CAFAM"
}

enum ARL {
  SURA = "SURA",
  POSITIVA = "POSITIVA",
  SEGUROS_BOLIVA = "SEGUROS_BOLIVA"
}
enum AREA {
  KITCHEN = "KITCHEN",
  WAREHOUSE = "WAREHOUSE",
  SALES = "SALES"
}
enum EPS {
  SALUD_TOTAL = "SALUD_TOTAL",
  NUEVA_EPS = "NUEVA_EPS",
  SURA = "SURA",
  SANITAS = "SANITAS",
}

enum PayrollConcept {
  BONUS_AND_COMMISSIONS = "BONUS_AND_COMMISSIONS",
  DAYTIME_OVERTIME_HOURS = "DAYTIME_OVERTIME_HOURS",
  NIGHTTIME_OVERTIME_HOURS = "NIGHTTIME_OVERTIME_HOURS",
  SUNDAY_OVERTIME_HOURS = "SUNDAY_OVERTIME_HOURS",
  SUNDAY_NIGHTTIME_OVERTIME_HOURS = "SUNDAY_NIGHTTIME_OVERTIME_HOURS",
  DEDUCTION = "DEDUCTION",
  LEAVE_WITHOUT_PAY = "LEAVE_WITHOUT_PAY",
  VACATION_PAY = "VACATION_PAY",
  INCAPACITY = "INCAPACITY",
  TRANSPORTATION_ALLOWANCE = "TRANSPORTATION_ALLOWANCE",
  PRIMA = "PRIMA",
  CESANTIAS = "CESANTIAS",
  ARL = "ARL",
  EPS = "EPS",
  PENSION = "PENSION",
  CCF = "CCF",
}

enum Objeto{
  OB_PRODUCT="OB_PRODUCT",
  OB_RECETA="OB_RECETA"
}

enum Permisions {
  CREAR = "CREAR",
  ELIMINAR = "ELIMINAR",
  CONSULTAR = "CONSULTAR",
  EDITAR = "EDITAR"
}

enum RollEmployee {
  KITCHENEMPLOYEE = "KITCHENEMPLOYEE",
  CASHIEREMPLOYE = "CASHIEREMPLOYE",
  WAREHOUSEEMPLOYEE = "WAREHOUSEEMPLOYEE"
}
export type { EmployeeCreate, user }
export { Cesantias, Pension, RiskLevel, ARL, AREA, EPS, PayrollConcept, Permisions, RollEmployee, Objeto }
