import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { jwtDecode } from 'jwt-decode'

import api from '../api'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextData {
  token: string
  logoutUser: () => void
  changeToken: (newToken: string) => void
  setName: (name: string) => void
  checkScopePermissions: (permissionToCheck: string) => boolean
  scopes: string[]
  email: string
  name: string
}

interface TokenPayload {
  sub: string
  scopes: string[]
  name: string
}

export const MODERATOR_SCOPE = 'moderator'
export const ADMIN_SCOPE = 'administrator'
export const MEMBER_SCOPE = 'member'

const UserContext = createContext<UserContextData | null>(null)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState('')
  const [scopes, setScopes] = useState<string[]>([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const jwtToken = localStorage.getItem('@UnBForum:token')

    if (jwtToken) {
      const user = jwtDecode(jwtToken.split(' ')[1]) as TokenPayload

      api.defaults.headers.common.Authorization = `${jwtToken}`

      setToken(jwtToken.split(' ')[1])
      setScopes(user.scopes)
      setEmail(user.sub)
      setName(user.name)
    }
  }, [])

  const changeToken = useCallback((newJWToken: string) => {
    localStorage.setItem('@UnBForum:token', `Bearer ${newJWToken}`)

    const user = jwtDecode(newJWToken) as TokenPayload
    api.defaults.headers.common.Authorization = `Bearer ${newJWToken}`

    setToken(newJWToken)
    setScopes(user.scopes)
    setEmail(user.sub)
    setName(user.name)
  }, [])

  const checkScopePermissions = useCallback(
    (permissionToCheck: string) => {
      return scopes.some((s) => s === permissionToCheck)
    },
    [scopes],
  )

  const logoutUser = useCallback((): void => {
    setToken('')
    setScopes([])
    setEmail('')
    setName('')

    api.defaults.headers.common.Authorization = null

    localStorage.removeItem('@UnBForum:token')
  }, [])

  return (
    <UserContext.Provider
      value={{
        token,
        name,
        email,
        scopes,
        changeToken,
        checkScopePermissions,
        logoutUser,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextData {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserThemeProvider')
  }

  return context
}
