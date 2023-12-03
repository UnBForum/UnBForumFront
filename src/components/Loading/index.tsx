import { Heading, Spinner, theme } from 'native-base'
import { LoadingContainer } from './styles'

interface LoadingProps {
  accessibilityLabel: string
}

export function Loading({ accessibilityLabel }: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner
        size="lg"
        color={theme.colors.primary['700']}
        accessibilityLabel={accessibilityLabel}
      />
      <Heading color="primary.700" fontSize="md">
        Carregando...
      </Heading>
    </LoadingContainer>
  )
}
