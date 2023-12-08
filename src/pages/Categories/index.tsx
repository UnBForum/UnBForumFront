import { AddIcon, Button, theme } from 'native-base'
import { Logo } from '../../assets/Logo'
import {
  CategoriesContainer,
  CategoriesListContainer,
  ColorIndicator,
  EditButtonContainer,
} from './styles'
import { FaEdit } from 'react-icons/fa'

export function Categories() {
  return (
    <CategoriesContainer>
      <div className="logo-categories-container">
        <Logo />
      </div>

      <section className="categories-list">
        <div id="create-category">
          <h1 className="categories-page-title">Lista de Categorias</h1>
          <Button size="lg" rightIcon={<AddIcon />} onPress={() => {}}>
            Criar categoria
          </Button>
        </div>

        <CategoriesListContainer>
          {Array.from({ length: 30 }, (_, i) => i).map((i) => (
            <div key={i} id="category-card">
              <EditButtonContainer onClick={() => {}}>
                <FaEdit color={theme.colors.primary['50']} />
              </EditButtonContainer>

              <p id="category-name">Eng. Software</p>
              <ColorIndicator colorIndicator="#f88400" />
            </div>
          ))}
        </CategoriesListContainer>
      </section>
    </CategoriesContainer>
  )
}
