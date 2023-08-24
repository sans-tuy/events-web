import { type StyleFunctionProps } from '@chakra-ui/react'

const Button = {
  baseStyle: {
    fontWeight: 500,
  },
  defaultProps: {
    variant: 'primary',
    colorScheme: 'primary',
  },
  variants: {
    primary: {
      bg: 'primary.500',
      color: 'white',
      _hover: {
        bg: 'primary.600',
        _disabled: {
          bg: 'primary.700',
        },
      },
    },
    filled: (props: StyleFunctionProps) => ({
      bg: props.theme.colors[props.colorScheme][500],
      color: props.theme.colors.white,
      _hover: {
        bg: props.theme.colors[props.colorScheme][600],
        _disabled: {
          bg: props.theme.colors[props.colorScheme][700],
        },
      },
    }),
    bordered: (props: StyleFunctionProps) => ({
      bg: 'transparent',
      border: `1px solid ${props.theme.colors[props.colorScheme][500]}`,
      borderColor: props.theme.colors[props.colorScheme][500],
      color: props.theme.colors[props.colorScheme][500],
      _hover: {
        bg: props.theme.colors[props.colorScheme][50],
        _disabled: {
          bg: props.theme.colors[props.colorScheme][100],
          borderColor: props.theme.colors[props.colorScheme][700],
          color: props.theme.colors[props.colorScheme][700],
        },
      },
    }),
    flat: (props: StyleFunctionProps) => ({
      bg: props.theme.colors[props.colorScheme][100],
      color: props.theme.colors[props.colorScheme][600],
      _hover: {
        bg: props.theme.colors[props.colorScheme][200],
        _disabled: {
          bg: props.theme.colors[props.colorScheme][300],
          color: props.theme.colors[props.colorScheme][700],
        },
      },
    }),
    light: (props: StyleFunctionProps) => ({
      bg: 'transparent',
      color: 'neutral.500',
      _hover: {
        bg: props.theme.colors[props.colorScheme][50],
        color: props.theme.colors[props.colorScheme][500],
        _disabled: {
          bg: 'neutral.100',
          color: 'neutral.700',
        },
      },
    }),
    lowStroke: () => ({
      bg: 'white',
      color: 'neutral.400',
      border: '1px solid',
      borderColor: 'neutral.400',
      _hover: {
        color: 'neutral.500',
        borderColor: 'neutral.500',
      },
    }),
    grey: () => ({
      bg: 'neutral.200',
      color: 'neutral.400',
      _hover: {
        bg: 'neutral.300',
        color: 'neutral.500',
      },
    }),
  },
}

export default Button
