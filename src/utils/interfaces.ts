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

export interface BackendUser {
  email: string
  id: number
  name: string
  role: string
  tags: string[]
}

export interface UpdateUser {
  name: string
}

export interface UpdateUserPassword {
  current_password: string
  new_password: string
}

export interface TopicData {
  title: string
  content: string
  files: string[]
}
