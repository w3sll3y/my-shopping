import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items:center;
  z-index: 1000;
`;

export const TitleContainer = styled.View`
  align-items: center;
  width: 100%;
  background-color: #00B37E;
  height: 20%;
  margin-top: -40px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;

export const Title = styled.Text`
  font-family: Inter_700Bold;
  margin-top: 15px;
  font-size: 20px;
  color: white;
`;
export const SubTitle = styled.Text`
  font-family: Inter_400Regular;
  color: #433D3F;
  font-size: 12px;
`;

export const FlatlistContainer = styled.View`
  margin-top: -40px;
  padding: 40px 20px 0;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  flex: 1;
  background-color: #CBF0F8;
`;