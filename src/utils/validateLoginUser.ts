import { LoginData } from './interfaces'

export const validateLoginUser = (loginData: LoginData) => {
  let isValid = true
  const fieldErrors: string[] = []
  const { email, password } = loginData

  if (!email || email === '') {
    isValid = false
    fieldErrors.push('Email Institucional')
  }

  if (!password || password === '') {
    isValid = false
    fieldErrors.push('Senha')
  }

  return { isValid, fieldErrors }
}
