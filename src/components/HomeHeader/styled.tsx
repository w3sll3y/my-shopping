import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #3BBFA7;
  padding: 7px 8px 5px 8px;
  flex-direction: row;
  height: 260px;
  position: relative;
  align-items: center;
  z-index: 1000;
`;

export const WellcomeContainer = styled.View`
  padding-left: 20px;
  margin-top: 20px;
  flex: 1;
`;

export const WellcomeText = styled.Text`
  color: white;
  font-size: 20px;
  font-family: Inter_400Regular;
`;

export const WellcomeTextName = styled.Text`
  margin-top: 5px;
  color: white;
  font-size: 25px;
  font-family: Inter_700Bold;
`;

export const WellcomeTextDate = styled.Text`
  color: white;
  margin-top: 10px;
  font-size: 12px;
  font-family: Inter_400Regular;
`;
export const ExitContainer = styled.View`
  padding-right: 20px;
  position: absolute;
  top: 60px;
  right: 0px;
`;