import { Button } from 'native-base'
import { Logo } from '../../assets/Logo'
import { UnBForumInput } from '../../components/UnBForumInput'
import { UnBForumSelect } from '../../components/UnBForumSelect'
import { ProfileContainer } from './styles'
import {
  unbForumCourses,
  unbForumProfiles,
} from '../CreateAccount/inputsObject'

export function Profile() {
  return (
    <ProfileContainer>
      <div className="logo-profile-container">
        <Logo />
      </div>

      <section className="inputs-profile-container">
        <h1 className="profile-page-title">Perfil de Usuário</h1>
        <UnBForumInput
          label="Nome Completo"
          placeholder="Digite seu nome completo..."
          inputType="text"
          accessibilityLabel="Digite o seu nome completo..."
        />
        <UnBForumInput
          label="Email Institucional"
          placeholder="Digite seu nome email..."
          inputType="text"
          accessibilityLabel="Digite o seu email..."
        />
        <UnBForumSelect
          label="Papel na Instituição"
          placeholder="Selecione o seu papel na instituição..."
          options={unbForumProfiles}
          accessibilityLabel="Selecione o seu papel na instituição..."
        />
        <UnBForumSelect
          label="Curso"
          placeholder="Selecione seu curso..."
          options={unbForumCourses}
          accessibilityLabel="Selecione seu curso..."
        />
        <UnBForumInput
          label="Senha"
          placeholder="Digite sua senha"
          inputType="password"
          accessibilityLabel="Digite a sua senha..."
        />

        <Button variant="solid" size="lg">
          Editar Perfil
        </Button>

        <div className="sub-buttons-container">
          <Button variant="subtle" size="md">
            Sair
          </Button>
          <Button variant="subtle" size="md">
            Deletar a Conta
          </Button>
        </div>
      </section>
    </ProfileContainer>
  )
}
