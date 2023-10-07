import { SelectOptions } from '../../../components/UnBForumSelect'

export interface InputsObjectProps {
  input: string
  type: 'text' | 'password' | undefined
  label: string
  placeholder: string
  accessibilityLabel: string
  options?: SelectOptions[]
}

export const inputsObject = [
  {
    input: 'normal',
    type: 'text',
    label: 'Nome Completo',
    placeholder: 'Digite o nome completo...',
    accessibilityLabel: 'Digite o nome completo',
  },
  {
    input: 'normal',
    type: 'text',
    label: 'Email Institucional',
    placeholder: 'Digite o email 240014099@unb.br..',
    accessibilityLabel: 'Digite o email',
  },
  {
    input: 'select',
    type: 'text',
    label: 'Papel na Instituição',
    placeholder: 'Selecione o seu papel...',
    accessibilityLabel: 'Selecione o seu papel na instituição',
    options: [
      { label: 'Aluno', value: 'Aluno' },
      { label: 'Coordenador', value: 'Coordenador' },
      { label: 'Professor', value: 'Professor' },
      { label: 'Secretaria', value: 'Secretaria' },
      { label: 'Técnico', value: 'Técnico' },
    ],
  },
  {
    input: 'select',
    type: 'text',
    label: 'Curso',
    placeholder: 'Selecione o seu curso...',
    accessibilityLabel: 'Selecione o seu curso',
    options: [
      { label: 'Engenharia Aeroespacial', value: 'Engenharia Aeroespacial' },
      { label: 'Engenharia Automotiva', value: 'Engenharia Automotiva' },
      { label: 'Engenharia de Energia', value: 'Engenharia de Energia' },
      { label: 'Engenharia de Software', value: 'Engenharia de Software' },
      { label: 'Engenharia Eletrônica', value: 'Engenharia Eletrônica' },
      { label: 'Engenharias', value: 'Engenharias' },
    ],
  },
  {
    input: 'normal',
    type: 'password',
    label: 'Senha',
    placeholder: 'Digite a sua senha...',
    accessibilityLabel: 'Digite a sua senha',
  },
  {
    input: 'normal',
    type: 'password',
    label: 'Confirme a senha',
    placeholder: 'Digite a sua senha novamente...',
    accessibilityLabel: 'Digite a sua senha novamente',
  },
]
