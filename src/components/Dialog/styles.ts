import { theme } from 'native-base'
import styled from 'styled-components'

export const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo sombreado */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogBox = styled.div`
  width: 40%;
  display: flex;

  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  position: relative;
  background-color: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  #buttons-dialog-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  & > p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.text['800']};
  }

  @media (max-width: 768px) {
    width: 80%;

    padding: 20px 20px;

    #buttons-dialog-container {
      gap: 0.5rem;
    }

    & > p {
      margin-top: 1.5rem;
      font-size: 0.9rem;
    }
  }
`

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 0 8px 0 0;
  transition: 0.3s all ease;

  background-color: ${theme.colors.danger['600']};

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
