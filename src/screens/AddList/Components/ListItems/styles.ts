import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 18px;
  flex-direction: row;
  width: 100%;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  align-self: center;
  background-color: #00B37E;
  border-radius: 15px;
  padding: 10px;
`;

export const TitleProductContainer = styled.View`
  flex-direction: column;
  width: 150px;
  font-family: Inter_400Regular;
  padding: 0px 10px;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  margin-left: 10px;
`;

export const TitleProductText = styled.Text`
  font-family: Inter_400Regular;
  color: #433D3F;
  font-size: 14px;
`;

export const UnityContainer = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const UnityContainerText = styled.Text`
  color: #084088;
  font-family: Inter_400Regular;
  font-size: 10px;
`;

export const PriceContainer = styled.Text`
  padding: 10px;
  color: #433D3F;
  font-family: Inter_400Regular;
  font-size: 14px;
  align-self: center;
`;

export const PriceContainerText = styled.Text`
  color: #433D3F;
  font-family: Inter_400Regular;
`;

export const RemoveButton = styled.TouchableOpacity`
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 35px;
  height: 35px;
`;

export const RemoveButtonText = styled.Text``;
