import { Button, Menu, theme } from 'native-base'
// import { InlineLogo } from '../../assets/InlineLogo'
import InlineLogo from '../../assets/InlineLogo.png'
import { HeaderContainer } from './styles'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'
import { useUser } from '../../hooks/user'
import { FiLogIn } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'

export function Header() {
  const { name, token } = useUser()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  function handleLogoClick(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/')
  }

  function handleClickLogin(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login/logon')
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

        {token && (
          <Menu.Item onPress={() => navigate('/my-topics')}>
            Meus Tópicos
          </Menu.Item>
        )}

        {token && (
          <Menu.Item onPress={() => navigate('/saved-topics')}>
            Tópicos Salvos
          </Menu.Item>
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
          {/* <InlineLogo /> */}
          <img src={InlineLogo} alt="Logo UnBFórum em linha" />
        </button>

        <div className="user-container">
          {token ? (
            <Menu
              w="190"
              placement="bottom right"
              trigger={(triggerProps) => {
                return (
                  <Button
                    // onPress={(e) => handleClickUserIcon(e)}
                    rightIcon={
                      token ? (
                        <FaUser
                          size="30"
                          color={theme.colors.tertiary['300']}
                        />
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
          ) : (
            <Button
              variant="solid"
              bgColor={theme.colors.tertiary['500']}
              _hover={{ shadow: '8' }}
              rightIcon={<FiLogIn size={30} color={theme.colors.white} />}
              onPress={(e) => handleClickLogin(e)}
            >
              {isMobile ? '' : 'Entrar'}
            </Button>
          )}
        </div>
      </section>
    </HeaderContainer>
  )
}
