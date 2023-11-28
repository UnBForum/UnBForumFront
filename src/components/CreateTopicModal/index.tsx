import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CloseButtonContainer,
  Content,
  ModalButtonsContainer,
  Overlay,
} from './styles'
import { UnBForumInput } from '../UnBForumInput'
import { UnBForumTextArea } from '../UnBForumTextArea'
import { UnBForumInputFile } from '../UnBForumInputFile'
import { AddIcon, Button, CheckCircleIcon, CloseIcon, theme } from 'native-base'

interface CreateTopicModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function CreateModalTopic({
  isModalOpen,
  setIsModalOpen,
}: CreateTopicModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [modalVisible, setModalVisible] = useState(false)

  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    setModalVisible(isModalOpen)
  }, [isModalOpen])

  const handleClose = () => {
    setModalVisible(false)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 300) // Tempo da transição em milissegundos (300ms no exemplo)
  }

  const handleAddFile = useCallback(
    (fileName: string) => {
      setFiles([...files, fileName])
    },
    [files],
  )

  const handleDeleteFile = useCallback(
    (fileName: string) => {
      const remainingFiles = files.filter((f) => f !== fileName)

      setFiles(remainingFiles)
    },
    [files],
  )

  const handleAddFileButtonClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      {modalVisible && (
        <Overlay isOpen={modalVisible} onClick={handleClose}>
          <Content isOpen={modalVisible} onClick={(e) => e.stopPropagation()}>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="2rem" color={theme.colors.primary['50']} />
            </CloseButtonContainer>

            <h1>Novo Tópico</h1>

            <UnBForumInput
              name="title"
              onChange={() => {}}
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Título"
              label="Título"
              placeholder="Digite o título do tópico..."
            />

            <UnBForumTextArea
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Conteúdo"
              label="Conteúdo"
              placeholder="Digite o conteúdo do tópico aqui..."
            />

            <UnBForumInputFile
              fileInputRef={fileInputRef}
              handleAddFile={handleAddFile}
              handleDeleteFile={handleDeleteFile}
              files={files}
            />

            <ModalButtonsContainer>
              <Button
                onPress={() => handleAddFileButtonClick()}
                size="md"
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '400' }}
                rightIcon={<AddIcon />}
              >
                Adicionar arquivos
              </Button>

              <Button
                id="create-topic-button"
                onPress={() => {}}
                bgColor={theme.colors.success['600']}
                size="md"
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '700' }}
                // isLoadingText="Criando..."
                // isLoading
                rightIcon={<CheckCircleIcon />}
              >
                Criar
              </Button>
            </ModalButtonsContainer>

            {/* <button onClick={handleClose}>Fechar</button> */}
          </Content>
        </Overlay>
      )}
    </>
  )
}
