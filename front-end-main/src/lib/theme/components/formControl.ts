export const FormLabel = {
  baseStyle: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '14px',
    color: 'neutral.800',
  },
}

export const Input = {
  variants: {
    custom: {
      field: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        color: 'neutral.800',
        border: '1px solid',
        borderColor: 'neutral.200',
        rounded: '8px',
        _placeholder: {
          color: 'neutral.400',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
        },
        _hover: {
          borderColor: 'neutral.300',
        },
        _focus: {
          outline: '2px solid',
          outlineColor: 'neutral.300',
        },
        _invalid: {
          borderColor: 'none',
          outline: '2px solid',
          outlineColor: 'danger.400',
        },
      },
    },
  },
  defaultProps: {
    variant: 'custom',
  },
}

export const Select = {
  variants: {
    custom: {
      field: {
        fontWeight: 400,
        lineHeight: '20px',
        color: 'neutral.800',
        border: '1px solid',
        borderColor: 'neutral.200',
        rounded: '8px',
        _hover: {
          borderColor: 'neutral.300',
        },
        _focus: {
          outline: '2px solid',
          outlineColor: 'neutral.300',
        },
        _invalid: {
          borderColor: 'none',
          outline: '2px solid',
          outlineColor: 'danger.400',
        },
        '> option': {
          color: 'neutral.800',
        },
      },
    },
  },
  defaultProps: {
    variant: 'custom',
  },
}

export const Textarea = {
  variants: {
    custom: {
      field: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        color: 'neutral.800',
        border: '1px solid',
        borderColor: 'neutral.200',
        rounded: '8px',
        _placeholder: {
          color: 'neutral.400',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
        },
        _hover: {
          borderColor: 'neutral.300',
        },
        _focus: {
          outline: '2px solid',
          outlineColor: 'neutral.300',
        },
        _invalid: {
          borderColor: 'none',
          outline: '2px solid',
          outlineColor: 'danger.400',
        },
      },
    },
  },
  defaultProps: {
    variant: 'custom',
  },
}
