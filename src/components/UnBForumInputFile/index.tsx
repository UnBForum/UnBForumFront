import { ChangeEvent, ReactNode, RefObject } from 'react'
import { FilesContainer, InputFileContainer, InputLabel } from './styles'
import { DeleteIcon, theme, useToast } from 'native-base'
import { FiFileText } from 'react-icons/fi'
import { ToastAlert } from '../Alert'
import { uploadFile } from '../../service/file'
import { FileData } from '../../utils/interfaces'

interface UnBForumInputFileProps {
  handleAddFile: (file: FileData) => void
  handleDeleteFile: (fileName: string) => void
  setIsAddFileLoading: (isAddFileLoading: boolean) => void
  files: FileData[]
  fileInputRef: RefObject<HTMLInputElement>
  filesUploadLimit: number
}

export function UnBForumInputFile({
  handleAddFile,
  handleDeleteFile,
  files,
  fileInputRef,
  filesUploadLimit = 2,
  setIsAddFileLoading,
}: UnBForumInputFileProps) {
  const toast = useToast()

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0]

    if (selectedFile && files.length + 1 <= filesUploadLimit) {
      setIsAddFileLoading(true)

      // const uploadResponse = await uploadFile(selectedFile)
      uploadFile(selectedFile)
        .then((uploadResponse) => {
          handleAddFile(uploadResponse.data[0])
        })
        .catch((_) => {
          toast.show({
            placement: 'top',
            render: () => {
              return (
                <ToastAlert
                  id="files-upload-error"
                  status="error"
                  title="Opa!"
                  description="Erro ao fazer upload do arquivo."
                />
              )
            },
          })
        })
        .finally(() => {
          setIsAddFileLoading(false)
        })
    } else {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <ToastAlert
              id="files-error"
              status="error"
              title="Opa!"
              description="Número de arquivos atingido ou arquivo é inválido."
            />
          )
        },
      })
    }
  }

  const renderSelectedFiles = () => {
    const fileElements: ReactNode[] = []

    files.forEach((file, idx) => {
      fileElements.push(
        <p id="file" key={idx}>
          <button
            id="delete-file-button"
            onClick={() => handleDeleteFile(file.name)}
          >
            <DeleteIcon size="1.7rem" color={theme.colors.primary['50']} />
          </button>

          <FiFileText size="38" color={theme.colors.gray['500']} />

          {file.name}
        </p>,
      )
    })

    return fileElements
  }

  const renderNofiles = () => {
    return <p id="no-files">Sem arquivos adicionados</p>
  }

  return (
    <>
      <InputFileContainer>
        <InputLabel fontSize="1.2rem">
          {'Arquivos' +
            ` (${files.length}/${filesUploadLimit} arquivos adicionados)`}
        </InputLabel>

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
    </>
  )
}
