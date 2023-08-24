import { type StyleFunctionProps } from '@chakra-ui/react'

const IconButton = {
  baseStyle: {
    fontWeight: 500,
  },
  defaultProps: {
    variant: 'primary',
    colorScheme: 'primary',
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.primary[500],
      color: props.theme.colors.white,
      _hover: {
        bg: props.theme.colors.primary[600],
      },
    }),
    filled: (props: StyleFunctionProps) => ({
      bg: props.theme.colors[props.colorScheme][500],
      color: props.theme.colors.white,
      _hover: {
        bg: props.theme.colors[props.colorScheme][600],
      },
    }),
    bordered: (props: StyleFunctionProps) => ({
      bg: 'transparent',
      border: `1px solid ${props.theme.colors[props.colorScheme][500]}`,
      borderColor: props.theme.colors[props.colorScheme][500],
      color: props.theme.colors[props.colorScheme][500],
      _hover: {
        bg: props.theme.colors[props.colorScheme][50],
      },
    }),
    flat: (props: StyleFunctionProps) => ({
      bg: props.theme.colors[props.colorScheme][100],
      color: props.theme.colors[props.colorScheme][600],
      _hover: {
        bg: props.theme.colors[props.colorScheme][200],
      },
    }),
    light: (props: StyleFunctionProps) => ({
      bg: 'transparent',
      color: 'neutral.500',
      _hover: {
        bg: props.theme.colors[props.colorScheme][50],
        color: props.theme.colors[props.colorScheme][500],
      },
    }),
  },
}

export default IconButton
