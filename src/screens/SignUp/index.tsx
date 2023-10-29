import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import Logo from '@assets/Listify.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Center mt={20}>
          <Image
            source={Logo}
            width="250px"
            alt='logo'
            height="250px"
          />
        </Center>

        <Center>
          <Heading color="red.700" mt={-10} mb={6} >
            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 20 }}>
              crie sua conta
            </Text>
          </Heading>

          <Input
            fontFamily="Inter_400Regular"
            placeholder="nome"
          />

          <Input
            placeholder="e-mail"
            keyboardType="email-address"
            fontFamily="Inter_400Regular"
            autoCapitalize="none"
          />

          <Input
            placeholder="senha"
            fontFamily="Inter_400Regular"
            secureTextEntry
          />

          <Button title="criar e acessar" />
        </Center>

        <Button
          title="voltar para o login"
          variant="outline"
          mt={12}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}