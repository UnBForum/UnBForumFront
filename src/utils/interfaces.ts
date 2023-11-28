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
