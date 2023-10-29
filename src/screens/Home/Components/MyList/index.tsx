import React from 'react-native'

import { FlatList } from 'react-native';
import { List } from '../../../../global/list';
import { Image, Center } from "native-base";
import ListPng from '@assets/ListHome.png'
import * as Styled from './styles';
import { ListItems } from './ListItems';

export function MyList() {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>
          minhas listas
        </Styled.Title>
      </Styled.TitleContainer>
      <Styled.FlatlistContainer>
        <FlatList
          data={List}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItems data={item} />
          )}
        />
      </Styled.FlatlistContainer>
    </Styled.Container>
  )
}