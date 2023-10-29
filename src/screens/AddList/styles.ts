import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  background-color: #3BBFA7;
  flex: 1;
  align-items: center;
`;

export const ContainerList = styled.View`
  width: 100%;
`;

export const TitleContainer = styled.View`
  background-color: #00B37E;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  width: 100%;
  align-items: center;
  height: 100px;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  font-family: Inter_700Bold;
  margin-top: 15px;
  color: white;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 15px 15px;
`;

export const ContainerInputColumn = styled.View`
  background-color: #3BBFA7;
  flex: 1;
`;

export const TitleInput = styled.Text`
  font-size: 16;
  font-family: Inter_400Regular;
  margin-right: 5px;
  color: #433D3F;
`;

export const InputNameProduct = styled.TextInput`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-family: Inter_400Regular;
  margin-right: 15px;
  width: 250px;
`;

export const ContainerInputColumnUnity = styled.View`
`;

export const InputQuantityProduct = styled.TextInput`
  background-color: white;
  padding: 10px;
  width: 80px;
  border-radius: 10px;
  font-size: 14px;
  font-family: Inter_400Regular;
`;

export const ContainerListProducts = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  width: 100%;
  position: relative;
  padding: 0 15px;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  background-color: #00875F;
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  right: 30px;
`;

export const ButtonAddProductText = styled.Text`
  color: white;
  font-size: 14px;
  font-family: Inter_600SemiBold;
`

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