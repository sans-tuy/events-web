import { Flex, Skeleton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface Props {
  loading: boolean
}

const SidebarSkeleton: FunctionComponent<Props> = ({ loading }) => (
  <Flex flexDir='column' gap={6} justify='space-between' w='full' as='ul'>
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton
        key={`${i}-sidebar-item-skeleton`}
        isLoaded={!loading}
        rounded='md'
        minW='226px'
        minH='40px'
      />
    ))}
  </Flex>
)

export default SidebarSkeleton
