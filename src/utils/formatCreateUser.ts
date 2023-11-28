import { CreateUser, UserData } from './interfaces'

export const formatCreateUser = (userData: UserData): CreateUser => {
  const { name, email, profile, course, password } = userData

  return {
    name,
    email,
    password,
    // tags: [],
    tags: [profile, course],
  }
}
