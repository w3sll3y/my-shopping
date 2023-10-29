import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const ContainerImage = styled.TouchableOpacity`
  background-color: #3BBFA7;
  margin-top: 70px;
  padding: 25px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  color: #433D3F;
  font-family: Inter_400Regular;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #CBF0F8;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #D9667B;
  width: 150px;
  height: 50px;
  margin: 10px 0 10px 25px;
  border-radius: 15px;
  align-items: center;
  padding: 15px 0;
`;

export const CancelButtonText = styled.Text`
  color: white;
  font-family: Inter_600SemiBold;
`;

export const SalveButton = styled.TouchableOpacity`
  background-color: #00875F;
  width: 150px;
  height: 50px;
  margin: 10px 25px 10px 0px;
  border-radius: 15px;
  align-items: center;
  padding: 15px 0;
`;

export const SalveButtonText = styled.Text`
  color: white;
  font-family: Inter_600SemiBold;
`;