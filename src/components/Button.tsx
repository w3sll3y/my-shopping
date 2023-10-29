import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base"

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase {...rest}
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "red.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="red.700"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "#93E0EE" : "#8C3E53",
        borderColor: variant === "outline" ? "#93E0EE" : "#8C3E53"
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "red.700" : "white"}
        fontFamily="Inter_600SemiBold"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}