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
      bg={variant === "outline" ? "transparent" : "blue.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="blue.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "blue.800" : "blue.800",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "blue.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}