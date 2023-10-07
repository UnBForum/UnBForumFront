import styled from 'styled-components'

export const LoginContainer = styled.div`
  max-width: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 30rem;
    height: 25rem;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;

    svg {
      width: 20rem;
      height: 20rem;
    }
  }
`
