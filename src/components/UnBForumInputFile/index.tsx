import { ChangeEvent, ReactNode, RefObject } from 'react'
import { FilesContainer, InputFileContainer, InputLabel } from './styles'
import { DeleteIcon, theme } from 'native-base'
import { FiFileText } from 'react-icons/fi'

interface UnBForumInputFileProps {
  handleAddFile: (fileName: string) => void
  handleDeleteFile: (fileName: string) => void
  files: string[]
  fileInputRef: RefObject<HTMLInputElement>
}

export function UnBForumInputFile({
  handleAddFile,
  handleDeleteFile,
  files,
  fileInputRef,
}: UnBForumInputFileProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0]

    if (selectedFile) {
      console.log('Arquivo selecionado:', selectedFile.name)
      console.log('Arquivos:', files)

      handleAddFile(selectedFile.name)
    }
  }

  const renderSelectedFiles = () => {
    const fileElements: ReactNode[] = []

    files.forEach((file, idx) => {
      fileElements.push(
        <p id="file" key={idx}>
          <button
            id="delete-file-button"
            onClick={() => handleDeleteFile(file)}
          >
            <DeleteIcon size="1.7rem" color={theme.colors.primary['50']} />
          </button>

          <FiFileText size="4rem" color={theme.colors.gray['500']} />

          {file}
        </p>,
      )
    })

    return fileElements
  }

  const renderNofiles = () => {
    return <p id="no-files">Sem arquivos adicionados</p>
  }

  return (
    <InputFileContainer>
      <InputLabel fontSize="1.2rem">Arquivos</InputLabel>

      <input
        ref={fileInputRef}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <FilesContainer>
        {files.length > 0 ? renderSelectedFiles() : renderNofiles()}
      </FilesContainer>
    </InputFileContainer>
  )
}
