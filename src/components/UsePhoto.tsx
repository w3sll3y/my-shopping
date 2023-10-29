import { Image, IImageProps } from "native-base";
import { View } from "react-native";

type Props = IImageProps & {
  size: number
}

export function UsePhoto({ size, ...rest }: Props) {
  return (
    <View>
      <Image
        w={size}
        h={size}
        rounded="full"
        borderColor="white"
        {...rest}
      />
    </View>
  )
}