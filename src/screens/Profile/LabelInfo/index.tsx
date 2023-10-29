import React from "react";

import * as Styled from './styles';

export function LabelInfo({ label, text, size, limitChar }) {

  function limitText(text: any, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  return (
    <Styled.Container>
      <Styled.ContainerLabel>
        <Styled.Label>
          {label}
        </Styled.Label>
      </Styled.ContainerLabel>
      <Styled.TextContainer size={size}>
        <Styled.TextContainerText>
          {limitText(text, limitChar)}
        </Styled.TextContainerText>
      </Styled.TextContainer>
    </Styled.Container>
  )
}