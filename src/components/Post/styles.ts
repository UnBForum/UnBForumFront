import { Button, theme } from 'native-base'
import styled, { css } from 'styled-components'
import {
  setFontSizeToPostContent,
  setFontSizeToPostContentMobile,
} from './utils'

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  /* padding: 0.5rem; */
  gap: 0.5rem;
  margin-top: 1rem;
`

export const LikesContainer = styled.div<{
  isInsideTopic: boolean
  isComment: boolean
}>`
  width: ${({ isComment }) => (isComment ? '15%' : '10%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isComment }) =>
    isComment ? 'flex-start' : 'flex-start'};
  gap: ${({ isInsideTopic, isComment }) =>
    isInsideTopic && !isComment ? '1rem' : '0.4rem'};

  & > p {
    font-weight: ${({ isComment }) => (isComment ? '700' : '900')};
    font-size: ${({ isComment }) => (isComment ? '1.2rem' : '1.4rem')};
    color: ${theme.colors.primary['900']};
  }

  #markButton {
    transition: 0.5s all ease;
  }

  #markButton:hover > svg {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  }

  #markButton:focus {
    box-shadow: none;
  }

  #reactionButton {
    & > svg {
      width: ${({ isComment }) => (isComment ? '1.2rem' : '1.5rem')};
      height: ${({ isComment }) => (isComment ? '1.2rem' : '1.5rem')};
    }
  }

  @media (max-width: 768px) {
    width: ${({ isInsideTopic }) => (isInsideTopic ? '10%' : '15%')};
    gap: 0.2rem;

    & > p {
      font-weight: 800;
      font-size: 1.1rem;
    }

    #reactionButton {
      & > svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
`

export const PostContentContainer = styled.div<{
  isInsideTopic: boolean
  isComment: boolean
}>`
  width: ${({ isComment }) => (isComment ? '85%' : '100%')};
  display: flex;
  flex-direction: column;
  gap: ${({ isComment }) => (isComment ? '0.4rem' : '0.6rem')};

  & > p {
    width: ${({ isInsideTopic }) => (isInsideTopic ? '90%' : '100%')};
    text-align: left;
    font-weight: ${({ isComment, isInsideTopic }) =>
      isComment || !isInsideTopic ? '400' : '400'};
    font-size: ${({ isComment, isInsideTopic }) =>
      setFontSizeToPostContent(isComment, isInsideTopic)};
    color: ${theme.colors.black};
    line-height: ${({ isComment }) => (isComment ? '1.7' : '2')};
  }

  &:focus {
    box-shadow: none;
  }

  #post-title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.4rem;

    & > p {
      width: 100%;
      font-size: ${({ isComment, isInsideTopic }) =>
        setFontSizeToPostContentMobile(isComment, isInsideTopic)};
      line-height: 1.7;
    }

    #post-title {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`

export const AuthorContainer = styled.div<{ isInsideTopic: boolean }>`
  width: 100%;
  display: flex;
  align-items: ${({ isInsideTopic }) => (isInsideTopic ? 'center' : 'center')};
  flex-direction: row;

  & > p {
    font-weight: ${({ isInsideTopic }) => (isInsideTopic ? 500 : 600)};
    font-size: 1rem;
    text-align: left;
    color: ${theme.colors.black};
  }

  @media (max-width: 768px) {
    & > p {
      font-size: 0.8rem;
    }
  }
`

export const BadgesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.7rem;

  #post-badge-text {
    color: ${theme.colors.text['50']};
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    gap: 0.4rem;

    #post-badge-text {
      font-size: 0.7rem;
      line-height: 1.3;
    }
  }
`

export const CommentContainer = styled(Button)<{ isInsideTopic: boolean }>`
  width: ${({ isInsideTopic }) => (isInsideTopic ? '50%' : '90%')};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; */
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${theme.colors.primary['600']};
  }

  #comment-button {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${theme.colors.primary['600']};
  }

  ${({ isInsideTopic }) =>
    isInsideTopic
      ? css`
          cursor: initial;
        `
      : css`
          &:hover {
            /* filter: brightness(50%); */

            & > p {
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
              color: ${theme.colors.primary['400']};
            }

            & > svg {
              color: ${theme.colors.primary['400']};
              filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
            }
          }
        `}

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    gap: 0.3rem;

    & > p {
      font-size: 1rem;
    }
  }
`

export const ReactionContainerInsideTopic = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 5px;
  background-color: ${theme.colors.tertiary['100']};

  & > p {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theme.colors.primary['800']};
    text-shadow: 0 0 2px rgba(255, 255, 255);
  }

  & > div[role='button']:focus {
    box-shadow: none;
  }

  & > div[role='button']:hover {
    /* box-shadow: none; */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
