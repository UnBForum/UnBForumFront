import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 80%;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-profile-container {
    width: 30%;

    svg {
      width: 17rem;
      height: 19rem;
    }
  }

  .inputs-profile-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    & > div[role='button'] {
      width: 100%;
    }

    .profile-page-title {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  .sub-buttons-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div[role='button'] {
      width: 45%;
    }
  }

  @media (max-width: 930px) {
    .logo-profile-container {
      svg {
        width: 15rem;
        height: 13rem;
      }
    }
  }

  @media (max-width: 768px) {
    .logo-profile-container {
      display: none;
    }

    .inputs-profile-container {
      width: 100%;
    }
  }
`
