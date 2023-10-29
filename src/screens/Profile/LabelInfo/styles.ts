import styled, { css } from "styled-components/native";

export const Container = styled.View`
`;

export const ContainerLabel = styled.View`
  max-width: 150px;
  padding: 10px 0;
`;

export const Label = styled.Text`
  font-family: Inter_400Regular;
  text-transform: lowercase;
`;

export const TextContainer = styled.View<{ size: number }>`
  padding: 10px;
  background-color: white;
  border-radius: 5px;

  ${({ size }) =>
    size &&
    css`
      max-width: ${size}px;
      min-width: ${size}px;
    `};
`;

export const TextContainerText = styled.Text`
  text-transform: lowercase;
  font-family: Inter_400Regular;
`;
