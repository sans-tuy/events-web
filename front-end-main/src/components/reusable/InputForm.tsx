import {
  type ReactNode,
  type FunctionComponent,
  useEffect,
  useState,
  HTMLInputTypeAttribute,
} from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { UilExclamationOctagon } from "@iconscout/react-unicons";
import { useFormContext } from "react-hook-form";

const defaultStyles = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  color: "neutral.800",
  _placeholder: {
    color: "neutral.400",
  },
};

interface Props extends InputProps {
  label: string | false;
  rightSection?: string | ReactNode;
  leftAddon?: string;
  error?: string;
  withShowPasswordButton?: boolean;
  isOptional?: boolean;
}

const InputForm: FunctionComponent<Props> = (props) => {
  const {
    label,
    rightSection,
    leftAddon,
    isRequired,
    error,
    name,
    type = "text",
    withShowPasswordButton = false,
    isOptional,
    ...restProps
  } = props;
  const { register, unregister } = useFormContext(); //! NEED TO BE REFACTORED
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);

  // unregister setiap unmounting fields
  useEffect(
    () => () => {
      unregister(name);
    },
    [name, unregister]
  );

  /* dijalankan hanya ketika input-type = password */
  const onSwitchPasswordType = () => {
    if (inputType === "password") {
      setInputType("text");
      setIsPasswordShow((prev) => !prev);
      return;
    }

    setInputType("password");
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {label && (
        <FormLabel display="flex" flexDirection="row">
          {label}
          {isOptional && (
            <Text ml="1" variant="xs.none.reg" color="neutral.500">
              (opsional)
            </Text>
          )}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddon && (
          <InputLeftAddon bg="white">
            <Text variant="sm.normal.reg">{leftAddon}</Text>
          </InputLeftAddon>
        )}
        <Input
          type={inputType}
          {...restProps}
          {...defaultStyles}
          {...(name &&
            register(name, {
              required: isRequired && {
                value: true,
                message: "Tidak Boleh Kosong",
              },
              minLength:
                name !== "password"
                  ? undefined
                  : {
                      value: 8,
                      message: "Password minimum 8 kata",
                    },
              pattern:
                name !== "email"
                  ? undefined
                  : {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
            }))}
          key={name}
        />
        {rightSection && (
          <InputRightElement>
            {typeof rightSection === "string" ? (
              <Text variant="sm.normal.reg">{rightSection}</Text>
            ) : (
              rightSection
            )}
          </InputRightElement>
        )}
        {type === "password" && withShowPasswordButton && (
          <InputRightElement width="4.5rem">
            <Button
              variant="ghost"
              colorScheme="neutral"
              h="1.75rem"
              size="sm"
              onClick={onSwitchPasswordType}
            >
              {isPasswordShow ? "Tutup" : "Lihat"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {error && (
        <FormErrorMessage display="flex" alignItems="center" gap={1}>
          <Icon as={UilExclamationOctagon} boxSize="18px" fill="danger.500" />
          <Text variant="xs.none.reg">{error}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputForm;
