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
  PROVENIR,
  COLFONDOS,
  FNA,
  PROTECCION
}
enum Pension {
  COLPENSIONES,
  PORVENIR,
  PROTECCION
}
enum RiskLevel {
  LEVEL_I,
  LEVEL_II,
  LEVEL_III,
  LEVEL_IV,
  LEVEL_V
}
enum CCF {
  COMFENALCO_QUINDIO,
  COMFENALCO_ANTIOQUIA,
  COMFAMA,
  CAFAM
}

enum ARL {
  SURA,
  POSITIVA,
  SEGUROS_BOLIVAR
}
enum AREA {
  KITCHEN,
  WAREHOUSE,
  SALES
}
enum EPS {
  SALUD_TOTAL,
  NUEVA_EPS,
  SURA,
  SANITAS
}
export type { EmployeeCreate, Cesantias, Pension, RiskLevel, CCF, ARL, AREA, EPS }

