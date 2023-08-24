import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Text,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react'
import { UilExclamationOctagon } from '@iconscout/react-unicons'
import { useEffect, type FunctionComponent } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props extends TextareaProps {
  label: string | false
  error?: string
  hasOptionalLabel?: boolean
}

const defaultStyles = {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: 'neutral.800',
  _placeholder: {
    color: 'neutral.400',
  },
}

const TextareaForm: FunctionComponent<Props> = (props) => {
  const { label, error, isRequired, name, hasOptionalLabel = false, ...restProps } = props
  const { register, unregister } = useFormContext()

  // unregister setiap unmounting fields
  useEffect(
    () => () => {
      unregister(name)
    },
    [name, unregister],
  )

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {label && (
        <FormLabel>
          {label} {hasOptionalLabel && <span>(opsional)</span>}
        </FormLabel>
      )}
      <Textarea
        {...restProps}
        {...defaultStyles}
        {...(name &&
          register(name, {
            required: isRequired && {
              value: true,
              message: 'Tidak Boleh Kosong',
            },
          }))}
        key={name}
      />
      {error && (
        <FormErrorMessage display='flex' alignItems='center' gap={1}>
          <Icon as={UilExclamationOctagon} boxSize='18px' fill='danger.500' />
          <Text variant='xs.none.reg'>{error}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default TextareaForm
