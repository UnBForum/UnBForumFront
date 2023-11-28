import { UserData } from './interfaces'

export const validateCreateUser = (userData: UserData) => {
  let isValid = true
  const fieldErrors: string[] = []
  const { name, email, profile, course, password, passwordConfirm } = userData

  if (!name || name === '') {
    isValid = false
    fieldErrors.push('Nome Completo')
  }

  if (!email || email === '') {
    isValid = false
    fieldErrors.push('Email Institucional')
  }

  if (!profile || profile === '') {
    isValid = false
    fieldErrors.push('Papel na Instituição')
  }

  if (!course || course === '') {
    isValid = false
    fieldErrors.push('Curso')
  }

  if (!password || password === '') {
    isValid = false
    fieldErrors.push('Senha')
  }

  if (
    !passwordConfirm ||
    passwordConfirm === '' ||
    passwordConfirm !== password
  ) {
    isValid = false
    fieldErrors.push('Confirme a senha')
  }

  return { isValid, fieldErrors }
}
