import {
  Button,
  Circle,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  type UseDisclosureReturn,
} from '@chakra-ui/react'
import { type FunctionComponent } from 'react'
import { UilTimes } from '@iconscout/react-unicons'

interface Props {
  message: string
  disclosure: UseDisclosureReturn
}

const FeedbackError: FunctionComponent<Props> = ({ message, disclosure }) => (
  <Modal onClose={disclosure.onClose} isOpen={disclosure.isOpen} motionPreset='scale' isCentered>
    <ModalOverlay backdropFilter='auto' backdropBlur='5px' bg='blackAlpha.400' />
    <ModalContent rounded='24px' p={6} minW='460px' minH='250px'>
      <ModalBody display='flex' flexDir='column' gap={6} alignItems='center'>
        <Circle
          size='64px'
          bg='danger.100'
          color='danger.500'
          border='5px solid'
          borderColor='danger.500'
        >
          <Icon as={UilTimes} boxSize='44px' />
        </Circle>
        <Flex flexDir='column' alignItems='center'>
          <Text variant='lg.normal.medium'>Gagal!</Text>
          <Text variant='sm.normal.reg' textAlign='center'>
            {message}
          </Text>
        </Flex>
        <Button colorScheme='danger' variant='filled' minW='250px' onClick={disclosure.onClose}>
          Ok
        </Button>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default FeedbackError
