import styled from 'styled-components'

export const CreateAccountContainer = styled.div`
  max-width: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 10rem;
    height: 12rem;
  }

  .inputs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    width: 90%;
    height: 100vh;

    padding: 1rem 0 1rem 0;

    .inputs-container {
      gap: 0.7rem;
    }
  }
`
