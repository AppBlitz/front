export type createRecipe = {
  id: string
  name: string
  instructions: string
  preparationTime: number
  servings: number
  comment: string
  creationDate: Date
  recipeStatus: Estate
  ingredients: Ingredient
}
export type Ingredient = {
  productId: string
  quantity: number
  unitOfMeasure: string
  additionalNotes: string
}
export enum Estate {
  ACTIVE,
  INACTIVE
}
