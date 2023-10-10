import { theme } from 'native-base'
import { InlineLogo } from '../../assets/InlineLogo'
import { ButtonUserIcon, HeaderContainer } from './styles'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'

export function Header() {
  const navigate = useNavigate()

  function handleClickUserIcon(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <section className="header-container">
        <InlineLogo />

        <div className="user-container">
          <h3 className="user-name">Lucas</h3>

          <ButtonUserIcon onClick={(e) => handleClickUserIcon(e)}>
            <FaUser size="2.5rem" color={theme.colors.tertiary['300']} />
          </ButtonUserIcon>
        </div>
      </section>
    </HeaderContainer>
  )
}
