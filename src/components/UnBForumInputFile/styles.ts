import { theme } from 'native-base'
import styled from 'styled-components'

export const InputFileContainer = styled.div`
  position: relative;
  width: 100%; /* largura desejada */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  /* Estilo personalizado para o botão de upload */
  .custom-file-upload {
  }

  /* Estilo para quando o mouse está sobre o botão */
  .custom-file-upload:hover {
    background-color: #e0e0e0;
  }
`

export const InputLabel = styled.label<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5rem;
  color: ${theme.colors.text[500]};
`

export const FilesContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  overflow-x: auto;

  /* background-color: blue; */

  & > p {
    width: 10rem;
    height: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0.8rem 1rem;

    text-align: center;
    font-weight: 400;
    line-height: 1.5;

    background-color: ${theme.colors.tertiary['100']};
  }

  #file {
    position: relative;

    font-size: 0.8rem;
    color: ${theme.colors.text['500']};

    overflow: hidden;
    word-wrap: break-word;
  }

  #delete-file-button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0.3rem;
    background-color: ${theme.colors.danger['600']};

    transition: 0.3s all ease;
  }

  #delete-file-button:hover {
    filter: brightness(70%);
  }

  #no-files {
    width: 100%;
    align-items: flex-start;

    font-size: 0.9rem;
    color: ${theme.colors.text['500']};
    background-color: transparent;

    padding: 0;
  }
`
