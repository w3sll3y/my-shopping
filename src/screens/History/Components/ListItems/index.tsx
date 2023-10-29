import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import * as Styled from './styles';
import { Image } from 'native-base';
import List from '@assets/todoList.png'

export function ListItems(data) {
  function limitText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image
          source={List}
          width="25px"
          alt='image list'
          height="25px"
        />
      </Styled.ImageContainer>
      <Styled.TitleProductContainer>
        <Styled.TitleProductText>
          {limitText(data.data.description, 20)}
        </Styled.TitleProductText>
        <Styled.PriceContainerText>
          R${data.data.items[0].price}
        </Styled.PriceContainerText>
      </Styled.TitleProductContainer>
      <Styled.RemoveButton>
        <Styled.RemoveButtonText>
          <MaterialIcons name="delete" color="#D9667B" size={18} />
        </Styled.RemoveButtonText>
      </Styled.RemoveButton>
    </Styled.Container>
  )
}