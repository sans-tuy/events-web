import { ModalProps, Heading, ModalBody, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface Props extends ModalProps {
  title: string
  width?: string
  height?: string
}

const Dialog: FunctionComponent<Props> = ({
  title,
  children,
  width = '550px',
  height = 'auto',
  ...restProps
}) => (
  <Modal {...restProps} isCentered>
    <ModalOverlay backdropFilter='auto' backdropBlur='5px' bg='blackAlpha.400' />
    <ModalContent rounded='24px' p={6} minW={width} minH={height}>
      <ModalBody display='flex' flexDir='column' gap={6} alignItems='stretch' p={0}>
        <Heading size='md'>{title}</Heading>
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default Dialog
