export interface LoginData {
  email: string
  password: string
}

export interface User {
  token: string
  user: UserData
}

export interface UserData {
  name: string
  email: string
  userType: string
  id: number
}
