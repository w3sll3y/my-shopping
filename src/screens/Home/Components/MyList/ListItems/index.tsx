import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import List from '@assets/todoList.png'
import * as Styled from './styles';
import { Image } from 'native-base';




export function ListItems(data: any) {
  function limitText(text: any, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  return (
    <Styled.Container onPress={() => console.log('aqui')}>
      <Styled.ListContainer>
        <Styled.ImageContainer>
          <Image
            source={List}
            width="25px"
            height="25px"
          />
        </Styled.ImageContainer>
        <Styled.ListContainerFirstColum>
          <Styled.Title>
            {limitText(data.data.description, 15)}
          </Styled.Title>
          <Styled.Price>
            R${data.data.items[0].price}
          </Styled.Price>
        </Styled.ListContainerFirstColum>
        <Styled.ListContainerSecondColum>
          <Styled.DeleteButton onPress={() => console.log('deletar')}>
            <Styled.TextButton>
              <MaterialIcons name="delete" color="#D9667B" size={22} />
            </Styled.TextButton>
          </Styled.DeleteButton>
        </Styled.ListContainerSecondColum>
      </Styled.ListContainer>
    </Styled.Container>
  )
}