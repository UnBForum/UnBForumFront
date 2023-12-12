import { Heading, Spinner, theme } from 'native-base'
import { LoadingContainer } from './styles'

interface LoadingProps {
  accessibilityLabel: string
  isInsideButton?: boolean
}

export function Loading({
  accessibilityLabel,
  isInsideButton = false,
}: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner
        size={isInsideButton ? 'sm' : 'lg'}
        color={theme.colors.primary['700']}
        accessibilityLabel={accessibilityLabel}
      />
      {!isInsideButton && (
        <Heading color="primary.700" fontSize="md">
          Carregando...
        </Heading>
      )}
    </LoadingContainer>
  )
}
