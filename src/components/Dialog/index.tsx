import { CloseButtonContainer, DialogBox, DialogContainer } from './styles'
import { Button, CloseIcon, theme, useBreakpointValue } from 'native-base'

interface DialogProps {
  isOpen: boolean
  handleClose: () => void
  handleAccept: () => void
  question: string
  cancelText?: string
  acceptText: string
  isLoadingAcceptButton?: boolean
  loadingAcceptButtonText?: string
}

export function Dialog({
  question,
  handleAccept,
  handleClose,
  cancelText = 'Cancelar',
  acceptText,
  isOpen,
  isLoadingAcceptButton = false,
  loadingAcceptButtonText = '',
}: DialogProps) {
  const buttonSize = useBreakpointValue({
    lg: 'md',
    base: 'sm',
  })

  return (
    <>
      {isOpen && (
        <DialogContainer>
          <DialogBox>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="21" color={theme.colors.primary['50']} />
            </CloseButtonContainer>

            <p>{question}</p>

            <div id="buttons-dialog-container">
              <Button size={buttonSize} variant="outline" onPress={handleClose}>
                {cancelText}
              </Button>
              <Button
                size={buttonSize}
                onPress={handleAccept}
                bgColor={theme.colors.danger['500']}
                isLoading={isLoadingAcceptButton}
                isLoadingText={loadingAcceptButtonText}
              >
                {acceptText}
              </Button>
            </div>
          </DialogBox>
        </DialogContainer>
      )}
    </>
  )
}
