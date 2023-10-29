import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  padding-top: 20px;
  height: 80px;
  background-color: #3BBFA7;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  z-index: 1000;
  bottom: 10px;
  left: 10px;
`;

export const TitleContainer = styled.Text`
  flex:1;
  font-family: Inter_900Black;
  text-align: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  text-transform: lowercase;
  color: white;
`;