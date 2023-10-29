import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  background-color: #3BBFA7;
`;

export const ContainerDollar = styled.View`
  margin: 5px 0px;
  background-color: #93E0EE;
  align-items: center;
  padding-top: 25px;
  width: 100%;
  height: 250px;
`;

export const TitleContainer = styled.View`
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  font-family: Inter_700Bold;
  font-size: 20px;
  color: white;
`
export const FlatListConstainer = styled.View`
  flex: 1;
  margin-top: -70px; 
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 15px 25px 0px;
  height: 100%;
  background-color: #3BBFA7;
`;

export const FooterContainer = styled.View`
  justify-content: space-between;
  padding: 5px 25px;
  width: 100%;
  align-items: center;
  background-color: #3BBFA7;
  flex-direction: row;
`;

export const FooterContainerText = styled.Text`
  color: white;
  margin-top: 10px;
  font-family: Roboto_700Bold;
  font-size: 16px;
`;

export const FooterContainerTextTotal = styled.Text`
  color: white;
  font-family: Roboto_700Bold;
  margin-top: 10px;
  font-size: 16px;
`;