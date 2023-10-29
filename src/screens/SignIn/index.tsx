import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigationRouteProps } from '@routes/auth.routes';
import Logo from '@assets/Listify.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn() {

  const navigation = useNavigation<AuthNavigationRouteProps>();

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Center mt={20}>
          <Image
            source={Logo}
            width="250px"
            height="250px"
            alt='logo'
          />
        </Center>

        <Center>
          <Heading color="#D9667B" mt={-10} mb={6}>
            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 20 }}>
              acesse sua conta
            </Text>
          </Heading>

          <Input
            placeholder="e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            fontFamily="Inter_400Regular"
          />

          <Input
            placeholder="senha"
            fontFamily="Inter_400Regular"
            secureTextEntry
          />

          <Button title="acessar" />
        </Center>

        <Center mt={12}>
          <Text color="red.700" mb={3} style={{ fontFamily: 'Inter_600SemiBold', fontsize: 14 }}>
            ainda não tem acesso?
          </Text>

          <Button
            title="criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}