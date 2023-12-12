import { theme } from 'native-base'
import styled from 'styled-components'

export const FavoritePostContainer = styled.button`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.8rem;

  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 10px ${theme.colors.black + '25'};
`

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > p {
    font-weight: 600;
    font-size: 0.8rem;
    color: ${theme.colors.black};
  }
`

export const PostContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    text-align: left;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${theme.colors.black};
    line-height: 1.3;

    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    font-size: 0.7rem;
    line-height: 1.5;
    font-weight: 500;
  }
`

export const CommentContainer = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  transition: all 0.5s ease;

  svg {
    color: ${theme.colors.primary['600']};
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${theme.colors.primary['600']};
  }

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

  &:focus {
    box-shadow: none;
  }
`
