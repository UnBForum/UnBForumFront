import { theme } from 'native-base'
import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  /* padding: 0.5rem; */
  gap: 0.5rem;
  margin-top: 1rem;
`

export const LikesContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  & > p {
    font-weight: 900;
    font-size: 1.4rem;
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

  @media (max-width: 768px) {
    width: 15%;
    gap: 0.2rem;

    & > p {
      font-weight: 800;
      font-size: 1.2rem;
    }
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
`

export const PostContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    text-align: left;
    font-weight: 400;
    font-size: 0.9rem;
    color: ${theme.colors.black};
    line-height: 2;
  }

  &:focus {
    box-shadow: none;
  }

  #post-title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    gap: 0.4rem;

    & > p {
      font-size: 0.7rem;
      line-height: 1.7;
    }
  }
`

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > p {
    font-weight: 600;
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

  @media (max-width: 768px) {
    gap: 0.3rem;

    & > p {
      font-size: 1rem;
    }
  }
`
