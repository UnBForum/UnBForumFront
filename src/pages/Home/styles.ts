import { theme } from 'native-base'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`

export const FeedContainer = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

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
`

export const LikesContainer = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: flex-start;

  background-color: blue;
`
