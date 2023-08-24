import { Button, Circle, Flex, Icon, Text, type ModalProps } from '@chakra-ui/react'
import { UilTimes } from '@iconscout/react-unicons'
import { FunctionComponent } from 'react'
import Popups from '../Popups'

interface Props extends Pick<ModalProps, 'isOpen' | 'onClose'> {
  onSubmit: () => Promise<void>
  label: string
  description: string
  icon?: any
}

const FeedbackDelete: FunctionComponent<Props> = ({
  description,
  onSubmit,
  label,
  icon = '',
  ...restProps
}) => {
  const onFeedbackComplete = () => {
    onSubmit()
    restProps.onClose()
  }

  return (
    <Popups {...restProps}>
      {!icon ? (
        <Circle
          size='64px'
          bg='white'
          color='success.500'
          border='5px solid'
          borderColor='danger.500'
        >
          <Icon as={UilTimes} boxSize='44px' fill='danger.500' />
        </Circle>
      ) : (
        <Icon as={icon} boxSize='64px' fill='danger.500' />
      )}
      <Flex flexDir='column' gap={1} align='center'>
        <Text variant='lg.normal.medium' color='neutral.900'>
          Hapus {label}
        </Text>
        <Text variant='sm.normal.reg' textAlign='center'>
          Anda akan menghapus{' '}
          <Text as='span' variant='sm.normal.bold' color='neutral.900'>
            {description} ?
          </Text>
        </Text>
      </Flex>
      <Flex w='full' justify='space-between' gap={3.5}>
        <Button minW='150px' variant='lowStroke' onClick={restProps.onClose}>
          <Text variant='sm.tight.medium'>Batalkan</Text>
        </Button>
        <Button
          minW='150px'
          onClick={() => onFeedbackComplete()}
          variant='filled'
          colorScheme='danger'
        >
          <Text variant='sm.tight.medium'>Hapus</Text>
        </Button>
      </Flex>
    </Popups>
  )
}

export default FeedbackDelete
