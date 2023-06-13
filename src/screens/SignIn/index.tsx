import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigationRouteProps } from '@routes/auth.routes';
import LogoSvg from '@assets/logo.svg';
import LogoTest from '@assets/logo.png'
import BackgroundImg from '@assets/background.png';
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
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoa comprando"
          resizeMode="contain"
          blurRadius={8}
          position="absolute"
        />

        <Center mt={24}>
          <Image
            source={LogoTest}
            width={48}
            height={48}
          />
        </Center>

        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading" fontWeight="bold">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            secureTextEntry
          />

          <Button title="Acessar" />
        </Center>

        <Center mt={12}>
          <Text color="white" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}