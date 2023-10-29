import * as Styled from './styles'
import { List } from '../../../../global/list';
import { Dimensions, Text, View } from "react-native";

import { FlatList } from 'react-native';
import { ListItems } from '../ListItems';
import { useEffect, useState } from 'react';

export function ListProducts(data) {

  return (
    <Styled.Container>
      <Styled.FlatListContainer>
        <Styled.TotalContainer>
          <Styled.TotalText>
            total: R$ {data.currentValue}
          </Styled.TotalText>
        </Styled.TotalContainer>
        <FlatList
          data={data.data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItems data={item} />
          )}
          ListEmptyComponent={() => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12 }}>
                nao ha item
              </Text>
            </View>
          )}
        />
      </Styled.FlatListContainer>
    </Styled.Container>
  )
}