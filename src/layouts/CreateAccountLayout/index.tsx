import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import CreateAccount from '../../assets/create-account.png'

export function CreateAccountLayout() {
  return (
    <LayoutContainer>
      <img className="create-account-image" src={CreateAccount} alt="" />

      <div className="content">
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
