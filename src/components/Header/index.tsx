import { Button, theme } from 'native-base'
import { InlineLogo } from '../../assets/InlineLogo'
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

  function handleClickUserIcon(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/profile')
  }

  function handleClickLogin(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login/logon')
  }

  return (
    <HeaderContainer>
      <section className="header-container">
        <InlineLogo />

        <div className="user-container">
          {token && (
            <>
              <Button
                onPress={(e) => handleClickUserIcon(e)}
                rightIcon={
                  <FaUser size="30" color={theme.colors.tertiary['300']} />
                }
              >
                {isMobile ? '' : name}
              </Button>
            </>
          )}

          {!token && (
            <>
              <Button
                variant="solid"
                bgColor={theme.colors.tertiary['500']}
                _hover={{ shadow: '8' }}
                rightIcon={<FiLogIn size={30} color={theme.colors.white} />}
                onPress={(e) => handleClickLogin(e)}
              >
                {isMobile ? '' : 'Entrar'}
              </Button>
            </>
          )}
        </div>
      </section>
    </HeaderContainer>
  )
}
