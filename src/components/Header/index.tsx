import { theme } from 'native-base'
import { InlineLogo } from '../../assets/InlineLogo'
import { ButtonUserIcon, HeaderContainer } from './styles'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'
import { useUser } from '../../hooks/user'

export function Header() {
  const { name, token, email, scopes } = useUser()
  const navigate = useNavigate()

  function handleClickUserIcon(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login/logon')
  }

  return (
    <HeaderContainer>
      <section className="header-container">
        <InlineLogo />

        <div className="user-container">
          <h3 className="user-name">{name}</h3>

          <ButtonUserIcon onClick={(e) => handleClickUserIcon(e)}>
            <FaUser size="2.5rem" color={theme.colors.tertiary['300']} />
          </ButtonUserIcon>
        </div>
      </section>
    </HeaderContainer>
  )
}
