import { Avatar, Badge } from 'native-base'
import {
  AuthorContainer,
  BadgesContainer,
  FavoritePostContainer,
  PostContentContainer,
} from './styles'
import { Topic } from '../../pages/Home'
import { getInitialsLetters } from '../../utils/getInitialsLetter'
import { useNavigate } from 'react-router-dom'

interface FavoritePostProps {
  favoriteTopic: Topic
}

export function FavoritePost({ favoriteTopic }: FavoritePostProps) {
  const navigate = useNavigate()

  return (
    <FavoritePostContainer
      onClick={() => navigate(`/topic/${favoriteTopic.id}`)}
    >
      <AuthorContainer>
        <Avatar bg="emerald.800" marginRight="0.8rem" size="xs">
          {getInitialsLetters(favoriteTopic.author.name)}
        </Avatar>
        <p>{`${favoriteTopic.author.name} - ${favoriteTopic.title}`}</p>
      </AuthorContainer>

      <PostContentContainer>
        <p
          dangerouslySetInnerHTML={{
            __html: favoriteTopic.content.replace(/\n/g, '<br>'),
          }}
        />

        <BadgesContainer>
          {favoriteTopic.categories.map((category) => {
            return (
              <Badge
                key={category.id}
                variant="solid"
                bg={category.color}
                alignSelf="center"
                size="sm"
                textDecoration="solid .8rem bold"
              >
                <p id="post-badge-text">{category.name}</p>
              </Badge>
            )
          })}
        </BadgesContainer>
      </PostContentContainer>
    </FavoritePostContainer>
  )
}
