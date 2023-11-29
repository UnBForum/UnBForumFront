export const validateUpdateUser = (newValue: string) => {
  let isValid = true
  const fieldErrors: string[] = []

  if (!newValue || newValue === '') {
    isValid = false
    fieldErrors.push('Nome Completo')
  }

  return { isValid, fieldErrors }
}
