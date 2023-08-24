import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import {
  Heading,
  Text,
  Button,
  IconButton,
  FormLabel /* Input, Select, Textarea  */,
} from './components'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors,
  components: {
    Heading,
    Text,
    Button,
    IconButton,
    FormLabel,
    // Input,
    // Select,
    // Textarea,
  },
})

export default theme
