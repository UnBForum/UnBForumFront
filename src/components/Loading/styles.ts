import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70vh;
  gap: 1rem;

  @media (max-width: 768px) {
    height: 30vh;
    /* overflow-y: hidden; */
  }
`
