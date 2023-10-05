import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CreateAccount } from './pages/CreateAccount'
import { CreateAccountLayout } from './layouts/CreateAccountLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/create-account" element={<CreateAccountLayout />}>
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Route>
    </Routes>
  )
}
