
type createRecipe = {
  id: string
  name: string
  ingredients: Ingredient[]
  instructions: string
  preparationTime: number
  servings: number
  comment: string
  creationDate: Date
  recipeStatus: Estate
}
type Ingredient = {
  productId: string
  quantity: number
  unitOfMeasure: string
  additionalNotes: string
}

export enum Estate {
  ACTIVE,
  INACTIVE
}
export type { createRecipe, Ingredient }
