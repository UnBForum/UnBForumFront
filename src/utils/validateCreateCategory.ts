import { Category } from './interfaces'

export const validateCreateCategory = (categoryData: Category) => {
  let isValid = true
  const fieldErrors: string[] = []
  const { name, color } = categoryData

  if (!name || name === '') {
    isValid = false
    fieldErrors.push('Nome da Categoria')
  }

  if (!color || color === '') {
    isValid = false
    fieldErrors.push('Cor da Categoria')
  }

  return { isValid, fieldErrors }
}
