import { theme } from 'native-base'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary['800']};

  .header-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.primary['800']};

    & > button > img {
      width: 15rem;
    }
  }

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${theme.colors.white};
  }

  @media (max-width: 768px) {
    .header-container {
      width: 90%;
      display: flex;
      align-items: center;
      /* justify-content: space-around; */

      & > button > img {
        width: 10rem;
      }
    }

    .user-container {
      /* display: none; */
    }

    .user-name {
      display: none;
    }
  }
`

export const ButtonUserIcon = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.dark['200']};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${theme.colors.tertiary['300']};
  }
`
