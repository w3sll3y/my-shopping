import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import * as Styled from './styled';
import { TouchableOpacity } from "react-native";

export function HomeHeader(props) {

  function goToLogin() {
    return
    // props.navigation.navigate('signIn');
  }

  return (
    <Styled.Container>
      <Styled.WellcomeContainer>
        <Styled.WellcomeText >
          Bem-vindo!
        </Styled.WellcomeText>
        <Styled.WellcomeTextName>
          Wesley
        </Styled.WellcomeTextName>
        <Styled.WellcomeTextDate>
          8 de setembro de 2023
        </Styled.WellcomeTextDate>
      </Styled.WellcomeContainer>
      <Styled.ExitContainer>
        <TouchableOpacity onPress={() => goToLogin()}>
          <Icon
            as={MaterialIcons}
            name="logout"
            color="white"
            size={7}
          />
        </TouchableOpacity>
      </Styled.ExitContainer>
    </Styled.Container>
  )
}