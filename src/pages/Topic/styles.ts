import styled from 'styled-components'

export const TopicContainer = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
`

export const CommentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  /* margin-top: 0rem; */

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    /* align-items: flex-end;
    justify-content: flex-end; */
    /* margin-top: 1rem; */
  }
`
