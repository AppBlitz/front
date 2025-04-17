type Products = {
  nameProduct: string
  dateExpiration: Date
  dateAdd: Date
  weightProduct: number
  priceProduct: number
  amount: number
  image: string
  supplier?: string
}

type updateProducts = {
  id: string
  nameProduct: string
  dateExpiration: Date
  dateAdd: Date
  weightProduct: number
  priceProduct: number
  amount: number
  images?: File[] | null
  suppliers: string[]
}
export type { Products, updateProducts }
