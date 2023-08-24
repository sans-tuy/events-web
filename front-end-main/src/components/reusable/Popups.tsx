import { Modal, ModalBody, ModalContent, ModalOverlay, ModalProps } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

const Popups: FunctionComponent<ModalProps> = ({ children, ...restProps }) => (
  <Modal {...restProps} isCentered>
    <ModalOverlay backdropFilter='auto' backdropBlur='5px' bg='blackAlpha.400' />
    <ModalContent rounded='24px' p={6} minW='460px' minH='250px' maxW='fit-content'>
      <ModalBody display='flex' flexDir='column' gap={6} alignItems='center' p='unset'>
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default Popups
