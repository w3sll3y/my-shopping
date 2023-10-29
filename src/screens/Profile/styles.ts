import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  align-items: center;
  background-color: #CBF0F8;
  flex: 1;
`;

export const ContainerImage = styled.View`
  width: 150px;
  height: 150px;
  position: relative;
  border-width: 0.5px;
  justify-content: center;
  align-items: center;
  border-color: #3BBFA7;
  border-radius: 15px;
  margin-top: 20px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #00875F;
  padding: 5px;
`;

export const InfoContainer = styled.View`
  background-color: #CBF0F8;
  flex: 1;
  margin-top: 20px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  position: relative;
  width: 100%;
  align-items: center;
`;

export const InfoContainerFirstColumn = styled.View`
  position:absolute;
  left: 20px;
  top: 20px;
`;

export const InfoContainerSecondColumn = styled.View`
  position:absolute;
  top: 20px;
  right: 20px;
`;

export const InfoContainerLine = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

export const AlterPasswordButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

export const AlterPasswordText = styled.Text`
  text-align: right;
  font-style: italic;
  text-decoration: underline;
  font-family: Inter_400Regular;
  color: #433D3F;
`;

export const FooterButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  bottom: 0;
`;

export const FooterButton = styled.TouchableOpacity`
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  background-color: #00875F;
`;

export const FooterButtonText = styled.Text`
  color: white;
  font-family: Inter_600SemiBold;
  font-size: 16px;
`;