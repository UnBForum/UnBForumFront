import { Avatar, Badge, theme } from 'native-base'
import {
  AuthorContainer,
  BadgesContainer,
  FavoritePostContainer,
  PostContentContainer,
} from './styles'

export function FavoritePost() {
  return (
    <FavoritePostContainer>
      <AuthorContainer>
        <Avatar bg="emerald.800" marginRight="0.8rem" size="xs">
          SH
        </Avatar>
        <p>
          Sandalo Henrique - Horários de Atendimento coordenação de Eng. de
          Software
        </p>
      </AuthorContainer>

      <PostContentContainer>
        <p>
          Prezad@s discentes,
          <br />
          <br />
          Prezad@s discentes, Bom dia! Espero que estejam bem. Deixo aqui
          informações sobre a dinâmica de atendimento da Coordenação de Eng. de
          Software durante o período da matrícula: - atendimento presencial nas
          2a-feiras de 0830h às 0930h; - atendimento presencial nas 4a-feiras de
          0830h às 1100h. Além do atendimento presencial, vocês têm acesso ao
          sistema Sigaa que disponibiliza canal de contato com o Coordenador
          para envio de mensagens.
          <br />
          <br />
          ***Não haverá atendimento via Chat Teams durante esse período.
          <br />
          *** Att, TA
          <br />
          <br />
          Para visualizar acesse{' '}
          <a href="https://teste.com.br/teste">https://teste.com.br/teste</a>
          <br />
        </p>

        <BadgesContainer>
          {['TCC', 'Eng. Software', 'Eng. Eletrônica', '27/07'].map(
            (label, key) => {
              return (
                <Badge
                  key={key}
                  variant="solid"
                  bg={theme.colors.tertiary['500']}
                  alignSelf="center"
                  size="sm"
                  textDecoration="solid .8rem bold"
                >
                  <p id="post-badge-text">{label}</p>
                </Badge>
              )
            },
          )}
        </BadgesContainer>
      </PostContentContainer>
    </FavoritePostContainer>
  )
}
