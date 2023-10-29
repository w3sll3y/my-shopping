import { Header } from '@components/Header/Header';
import { Image, Center } from "native-base";
import { FlatList } from 'react-native';

import { List } from '../../global/list';
import { ListItems } from './Components/ListItems';
import Coin from '@assets/coin.png'
import * as Styled from './styles'

export function History() {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.ContainerDollar>
          <Image
            source={Coin}
            width="100px"
            height="100px"
            alt='image cash'
          />
          <Styled.Title>
            historico de compra
          </Styled.Title>
        </Styled.ContainerDollar>
        <Styled.FlatListConstainer>
          <FlatList
            data={List}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListItems data={item} />
            )}
          />
        </Styled.FlatListConstainer>
        <Styled.FooterContainer>
          <Styled.FooterContainerText>
            total:
          </Styled.FooterContainerText>
          <Styled.FooterContainerTextTotal>
            R$: 29.000
          </Styled.FooterContainerTextTotal>
        </Styled.FooterContainer>
      </Styled.Container>
    </>
  )
}