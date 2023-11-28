export interface UserData {
  name: string
  email: string
  profile: string
  course: string
  password: string
  passwordConfirm: string
}

export interface CreateUser {
  name: string
  email: string
  password: string
  tags?: string[]
}

export interface LoginData {
  email: string
  password: string
}

export interface LoginUser {
  username: string
  password: string
}
