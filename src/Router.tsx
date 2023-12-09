import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Logon } from './pages/Logon'
import { Login } from './pages/Login'
import { CreateAccountLayout } from './layouts/CreateAccountLayout'
import { CreateAccount } from './pages/CreateAccount'
import { Profile } from './pages/Profile'
import { Topic } from './pages/Topic'
import { Categories } from './pages/Categories'
import { CreateTopic } from './pages/CreateTopic'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:id" element={<Topic />} />
      </Route>

      <Route path="/profile" element={<DefaultLayout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/categories" element={<DefaultLayout />}>
        <Route path="/categories" element={<Categories />} />
      </Route>

      <Route path="/create-topic" element={<DefaultLayout />}>
        <Route path="/create-topic" element={<CreateTopic />} />
      </Route>

      <Route path="/login" element={<CreateAccountLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/login/logon" element={<Logon />} />
        <Route path="/login/create-account" element={<CreateAccount />} />
      </Route>
    </Routes>
  )
}
