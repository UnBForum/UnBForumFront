import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
  useToast,
} from 'native-base'

interface ToartAlertProps {
  id: string
  status: string
  variant?: string
  title: string
  description: string
  isClosable?: boolean
}

export const ToastAlert = ({
  id,
  status,
  variant = 'left-accent',
  title,
  description,
  isClosable = false,
  ...rest
}: ToartAlertProps) => {
  const toast = useToast()

  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status || 'error'}
      variant={variant}
      zIndex={999999999999}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                    ? 'darkText'
                    : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text
          px="6"
          color={
            variant === 'solid'
              ? 'lightText'
              : variant !== 'outline'
                ? 'darkText'
                : null
          }
        >
          {description}
        </Text>
      </VStack>
    </Alert>
  )
}
