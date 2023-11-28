import { LoginUser, LoginData } from './interfaces'

export const formatLoginUser = (loginData: LoginData): LoginUser => {
  const { email, password } = loginData

  return {
    username: email,
    password,
  }
}
