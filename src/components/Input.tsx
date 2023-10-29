import { Input as NativeBaseInput, IInputProps } from "native-base"

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="#f8f8f8"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="#383838"
      fontFamily="body"
      mb={4}
      placeholderTextColor="#D9667B"
      _focus={{
        bg: "#f8f8f8",
        borderWidth: 1,
        borderColor: "#f8f8f8"
      }}
      {...rest}
    />
  )
}