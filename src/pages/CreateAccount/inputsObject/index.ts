import { SelectOptions } from '../../../components/UnBForumSelect'

export interface InputsObjectProps {
  input: string
  type: 'text' | 'password'
  label: string
  name: string
  placeholder: string
  accessibilityLabel: string
  options: SelectOptions[]
}

export const unbForumProfiles = [
  { label: 'Aluno', value: 'Aluno' },
  { label: 'Coordenador', value: 'Coordenador' },
  { label: 'Professor', value: 'Professor' },
  { label: 'Secretaria', value: 'Secretaria' },
  { label: 'Técnico', value: 'Técnico' },
]

export const unbForumCourses = [
  { label: 'Engenharia Aeroespacial', value: 'Engenharia Aeroespacial' },
  { label: 'Engenharia Automotiva', value: 'Engenharia Automotiva' },
  { label: 'Engenharia de Energia', value: 'Engenharia de Energia' },
  { label: 'Engenharia de Software', value: 'Engenharia de Software' },
  { label: 'Engenharia Eletrônica', value: 'Engenharia Eletrônica' },
  { label: 'Engenharias', value: 'Engenharias' },
]

export const inputsObject: InputsObjectProps[] = [
  {
    input: 'normal',
    type: 'text',
    name: 'name',
    label: 'Nome Completo',
    placeholder: 'Digite o nome completo...',
    accessibilityLabel: 'Digite o nome completo',
    options: [],
  },
  {
    input: 'normal',
    type: 'text',
    name: 'email',
    label: 'Email Institucional',
    placeholder: 'Digite o email 240014099@unb.br...',
    accessibilityLabel: 'Digite o email',
    options: [],
  },
  {
    input: 'select',
    type: 'text',
    name: 'profile',
    label: 'Papel na Instituição',
    placeholder: 'Selecione o seu papel...',
    accessibilityLabel: 'Selecione o seu papel na instituição',
    options: unbForumProfiles,
  },
  {
    input: 'select',
    type: 'text',
    name: 'course',
    label: 'Curso',
    placeholder: 'Selecione o seu curso...',
    accessibilityLabel: 'Selecione o seu curso',
    options: unbForumCourses,
  },
  {
    input: 'normal',
    type: 'password',
    name: 'password',
    label: 'Senha',
    placeholder: 'Digite a sua senha...',
    accessibilityLabel: 'Digite a sua senha',
    options: [],
  },
  {
    input: 'normal',
    type: 'password',
    name: 'passwordConfirm',
    label: 'Confirme a senha',
    placeholder: 'Digite a sua senha novamente...',
    accessibilityLabel: 'Digite a sua senha novamente',
    options: [],
  },
]
