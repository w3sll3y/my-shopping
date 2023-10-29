import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 5px;
  min-width: 100%;
  border-radius: 15px;
  padding: 5px;
  background-color: white;
  flex-direction: row;
`;

export const TitleProductContainer = styled.View`
  padding-left: 5px;
  border-radius: 5px;
  justify-content: center;
`;

export const TitleProductText = styled.Text`
  font-family: Inter_400Regular;
  color: #433D3F;
  font-size: 14px;
`;

export const PriceContainer = styled.Text`
  color: #433D3F;
  font-family: Inter_400Regular;
  font-size: 14px;
`;

export const PriceContainerText = styled.Text`
  color: #00B37E;
  font-family: Inter_400Regular;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  top: 10px;
  justify-content: center;
`;

export const RemoveButtonText = styled.Text``;

export const ImageContainer = styled.View`
  background-color: #3BBFA7;
  border-radius: 15px;
  padding: 15px;
`;
