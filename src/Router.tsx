import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Logon } from './pages/Logon'
import { Login } from './pages/Login'
import { CreateAccountLayout } from './layouts/CreateAccountLayout'
import { CreateAccount } from './pages/CreateAccount'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Route>
      <Route path="/login" element={<CreateAccountLayout />}>
        <Route path="/login/logon" element={<Logon />} />
        <Route path="/login/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
