import styled from "styled-components/native";
import { Dimensions } from "react-native";

const heightScreen = Dimensions.get('window').height;

export const Container = styled.View`
  background-color: #CBF0F8;
  width: 100%;
  height: 100%;
  margin-top: -45px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-family: Inter_700Bold;
  margin-bottom: 15px;
  font-size: 18px;
  color: white;
`

export const FlatListContainer = styled.View`
  margin-top: 5px;
  padding: 0px 25px 20px;
  position: relative;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  width: 100%;
  text-align: end;
  justify-content: flex-end;
`;

export const TotalText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 14px;
  right: 15px;
  color: #433D3F;
`;
