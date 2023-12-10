import { Button, Menu, theme } from 'native-base'
import { InlineLogo } from '../../assets/InlineLogo'
import { HeaderContainer } from './styles'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'
import { useUser } from '../../hooks/user'
import { FiLogIn } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'
import { UnBForumMenu } from '../UnBForumMenu'

export function Header() {
  const { name, token } = useUser()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  function handleClickUserIcon(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/profile')
  }

  function handleClickLogin(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login/logon')
  }

  function handleLogoClick(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/')
  }

  function renderMenuButtonText() {
    if (token) {
      return isMobile ? '' : name
    } else {
      return isMobile ? '' : 'Entrar'
    }
  }

  function renderMenuOptions() {
    return (
      <>
        {!token && (
          <Menu.Item onPress={() => navigate('/login/logon')}>Entrar</Menu.Item>
        )}

        <Menu.Item onPress={() => navigate('/')}>Feed</Menu.Item>

        {token && (
          <Menu.Item onPress={() => navigate('/profile')}>Perfil</Menu.Item>
        )}

        <Menu.Item onPress={() => navigate('/categories')}>
          Categorias
        </Menu.Item>
      </>
    )
  }

  return (
    <HeaderContainer>
      <section className="header-container">
        <button onClick={(e) => handleLogoClick(e)}>
          <InlineLogo />
        </button>

        <div className="user-container">
          <Menu
            w="190"
            placement="bottom right"
            trigger={(triggerProps) => {
              return (
                <Button
                  // onPress={(e) => handleClickUserIcon(e)}
                  rightIcon={
                    token ? (
                      <FaUser size="30" color={theme.colors.tertiary['300']} />
                    ) : (
                      <FiLogIn size={30} color={theme.colors.white} />
                    )
                  }
                  {...triggerProps}
                >
                  {renderMenuButtonText()}
                </Button>
              )
            }}
          >
            {renderMenuOptions()}
          </Menu>
        </div>
      </section>
    </HeaderContainer>
  )
}
