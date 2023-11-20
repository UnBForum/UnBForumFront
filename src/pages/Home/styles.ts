import { theme } from 'native-base'
import styled from 'styled-components'
import { UnBForumInput } from '../../components/UnBForumInput'

export const HomeContainer = styled.main`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
`

export const FeedContainer = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  & > div[role='button'] {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.text['50']};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 0 10px ${theme.colors.success['600']};
    }

    & > svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    & > div[role='button'] {
      font-size: 0.9rem;
    }
  }
`

export const PostsContainer = styled.main`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  /* background-color: #f3f3f3; */
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
    /* overflow-y: hidden; */
  }
`

export const LikesContainer = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`

export const SearchInput = styled(UnBForumInput)``

export const FavoritesListContainer = styled.aside`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background-color: ${theme.colors.info['50']};
  box-shadow: 0 0 10px ${theme.colors.primary['800']};
  border-radius: 5px;
  padding: 0.7rem 0;

  overflow-y: auto;

  #favorite-title-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
  }

  #title-favorites {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${theme.colors.rose['600']};
  }

  @media (max-width: 768px) {
    height: auto;
  }
`
