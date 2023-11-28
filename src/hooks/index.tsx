import React, { ReactNode } from 'react'

import { UserProvider } from './user'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default AppProvider
