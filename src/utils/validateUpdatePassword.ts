export const validateUpdatePassword = (
  password: string,
  newPassword: string,
) => {
  let isValid = true
  const fieldErrors: string[] = []
  let specialError = ''

  if (!password || password === '') {
    isValid = false
    fieldErrors.push('Senha Atual')
  }

  if (!newPassword || newPassword === '') {
    isValid = false
    fieldErrors.push('Nova Senha')
  }

  if (!newPassword && newPassword === password) {
    isValid = false
    specialError = 'Nova senha não pode ser a mesma que a atual'
  }

  return { isValid, fieldErrors, specialError }
}
