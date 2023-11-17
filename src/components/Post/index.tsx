import { MouseEvent, useState } from 'react'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  theme,
  Avatar,
  Divider,
  Badge,
} from 'native-base'
import { FaComment } from 'react-icons/fa'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'

import {
  AuthorContainer,
  BadgesContainer,
  CommentContainer,
  InfoContainer,
  LikesContainer,
  PostContainer,
  PostContentContainer,
} from './styles'

export function Post() {
  const [likes, setLikes] = useState(105)
  const [isMark, setIsMark] = useState(false)

  function handleReaction(e: MouseEvent, valueToadd: number) {
    e.preventDefault()
    setLikes(likes + valueToadd)
  }

  function handleSave(e: MouseEvent) {
    e.preventDefault()
    setIsMark(!isMark)
  }

  function renderMarkIcon() {
    switch (isMark) {
      case true:
        return <IoBookmark size="30" color={theme.colors.darkBlue['400']} />

      case false:
        return (
          <IoBookmarkOutline size="30" color={theme.colors.darkBlue['400']} />
        )
    }
  }

  return (
    <>
      <PostContainer>
        <LikesContainer>
          <button id="reactionButton" onClick={(e) => handleReaction(e, 1)}>
            <ArrowUpIcon color={theme.colors.muted['500']} size="md" />
          </button>

          <p>{likes}</p>

          <button id="reactionButton" onClick={(e) => handleReaction(e, -1)}>
            <ArrowDownIcon color={theme.colors.muted['500']} size="md" />
          </button>

          <button id="markButton" onClick={(e) => handleSave(e)}>
            {renderMarkIcon()}
          </button>
        </LikesContainer>

        <InfoContainer>
          <PostContentContainer>
            <AuthorContainer>
              <Avatar bg="emerald.600" marginRight="0.8rem" size="sm">
                SH
              </Avatar>
              <p>
                Sandalo Henrique - Horários de Atendimento coordenação de Eng.
                de Software
              </p>
            </AuthorContainer>

            <p>
              Prezad@s discentes,
              <br />
              <br />
              Prezad@s discentes, Bom dia! Espero que estejam bem. Deixo aqui
              informações sobre a dinâmica de atendimento da Coordenação de Eng.
              de Software durante o período da matrícula: - atendimento
              presencial nas 2a-feiras de 0830h às 0930h; - atendimento
              presencial nas 4a-feiras de 0830h às 1100h. Além do atendimento
              presencial, vocês têm acesso ao sistema Sigaa que disponibiliza
              canal de contato com o Coordenador para envio de mensagens.
              <br />
              <br />
              ***Não haverá atendimento via Chat Teams durante esse período.
              <br />
              *** Att, TA
              <br />
              <br />
              Para visualizar acesse{' '}
              <a href="https://teste.com.br/teste">
                https://teste.com.br/teste
              </a>
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
                      size="md"
                      textDecoration="solid .8rem bold"
                    >
                      <p id="post-badge-text">{label}</p>
                    </Badge>
                  )
                },
              )}
            </BadgesContainer>

            <CommentContainer>
              <FaComment size="22" />
              <p>15</p>
            </CommentContainer>
          </PostContentContainer>
        </InfoContainer>
      </PostContainer>

      <Divider
        marginTop="0.5rem"
        _light={{
          bg: 'muted.800',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
    </>
  )
}
