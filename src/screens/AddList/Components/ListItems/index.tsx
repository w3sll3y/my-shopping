import React, { useEffect, useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import * as Styled from './styles';
import Check from './Components/Check';

export function ListItems(data) {

  function limitText(text: any, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }

  const [teste, setTeste] = useState(false)

  async function handleChangeCheck(status: boolean) {
    if (status === false) {
      setTeste(true)
    }
    else if (status === true) {
      setTeste(false)
    }
  }

  useEffect(() => {
    setTeste(data.data.status)
  }, [])

  return (
    <Styled.Container>
      <Styled.CheckboxContainer
        onPress={() => handleChangeCheck(teste)}
      >
        <Check data={teste} />
      </Styled.CheckboxContainer>
      <Styled.TitleProductContainer>
        <Styled.TitleProductText>
          {limitText(data?.data?.product, 10)}
        </Styled.TitleProductText>
        <Styled.UnityContainerText>
          qtd: {limitText(data.data.quantity, 10)}
        </Styled.UnityContainerText>
      </Styled.TitleProductContainer>
      <Styled.PriceContainer>
        <Styled.PriceContainerText>
          R$: {limitText(data.data.valueUnity, 10)}
        </Styled.PriceContainerText>
      </Styled.PriceContainer>
      <Styled.RemoveButton>
        <Styled.RemoveButtonText>
          <MaterialIcons name="delete" color="#D9667B" size={18} />
        </Styled.RemoveButtonText>
      </Styled.RemoveButton>
    </Styled.Container>
  )
}