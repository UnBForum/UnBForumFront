import { Button, HamburgerIcon, Menu, theme } from 'native-base'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/user'

export function UnBForumMenu() {
  const navigate = useNavigate()
  const { token } = useUser()

  return (
    <Menu
      w="190"
      placement="bottom right"
      trigger={(triggerProps) => {
        return (
          <Button
            variant="solid"
            // bgColor={theme.colors.tertiary['500']}
            _hover={{ shadow: '8' }}
            rightIcon={<HamburgerIcon size={30} color={theme.colors.white} />}
            onPress={() => {}}
            {...triggerProps}
          />
        )
      }}
    >
      <Menu.Item onPress={() => navigate('/')}>Feed</Menu.Item>
      {token && (
        <Menu.Item onPress={() => navigate('/profile')}>Perfil</Menu.Item>
      )}
      {!token && (
        <Menu.Item onPress={() => navigate('/login/logon')}>Entrar</Menu.Item>
      )}
    </Menu>
  )
}
