import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';

interface IHeader {
  title?: string;
}

export function Header({ title }: IHeader) {

  const navigate = useNavigation();

  function goBack() {
    navigate.goBack();
  }

  return (
    <Styled.Container>
      <Styled.ButtonBack onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Styled.ButtonBack>
      <Styled.TitleContainer>
        <Styled.Title>
          {title}
        </Styled.Title>
      </Styled.TitleContainer>
    </Styled.Container>
  )
}