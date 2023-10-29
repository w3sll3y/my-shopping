import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 5px;
  padding: 0 5px;
`;
export const ImageContainer = styled.View`
  background-color: #3BBFA7;
  border-radius: 15px;
  padding: 15px;
`;

export const ListContainer = styled.View`
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 15px;
  border-radius: 15px;
  justify-content: space-between;
  width: 100%;
  margin-right: 5px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-transform: lowercase;
  font-family: Inter_400Regular;
`;

export const ListContainerFirstColum = styled.View`
  flex: 1;
  padding: 0px 10px;
`;

export const ListContainerSecondColum = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  font-size: 14px;
  font-family: Inter_400Regular;
  color: #00B37E;
`;

export const TextButton = styled.Text``;
export const DeleteButton = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  height: 35px;
  width: 35px;
  justify-content: center;
  background-color: white;
`;