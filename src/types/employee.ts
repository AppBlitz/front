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
}
enum Cesantias {
  PROVENIR = "PROVENIR",
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
export type { EmployeeCreate, Cesantias, Pension, RiskLevel, ARL, AREA, EPS }

