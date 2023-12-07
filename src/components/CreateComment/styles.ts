import styled from 'styled-components'

export const CreateCommentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1rem;
  margin-left: 10%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 5%;
    gap: 0.5rem;
  }
`
export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
