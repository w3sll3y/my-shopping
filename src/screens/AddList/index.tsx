import React, { useState, useRef } from 'react';
import { Header } from '@components/Header/Header';

import * as Styled from './styles'
import { ListProducts } from './Components/ListProducts';



export function AddList() {

  const [listProducts, setListProducts] = useState([])
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalValue, setTotalValue] = useState(0);


  async function handleAddProduct() {

    if (productName !== '' && price > 0) {
      const newProduct = {
        product: productName,
        quantity,
        valueUnity: price,
        status: false
      }
      setListProducts(prevState => [...prevState, newProduct]);
      setProductName('');
      setQuantity(0);
      setPrice(0);
      addValue(newProduct.valueUnity, newProduct.quantity);
    }
    else if (productName === '') {
      alert('Adicione um produto')
    }
    else if (price === 0) {
      alert('Adicione qual valor de cada produto')
    }
    else if (quantity === 0) {
      alert('Adicione a quantidade do produto')
    }
  }

  async function addValue(value: number, quantityValue: number) {
    const value1 = parseInt(totalValue)
    const value2 = parseInt(value)
    const quantity1 = parseInt(quantityValue);

    const newTotalValue = sum(value2, value1, quantity1);
    setTotalValue(newTotalValue)
  }

  function sum(a, b, c) {
    return (a * c) + b
  }
  return (
    <>
      <Header title='nova lista' />
      <Styled.Container>
        <Styled.ContainerList>
          <Styled.ContainerInput>
            <Styled.InputNameProduct
              placeholder='nome do produto'
              onChangeText={text => setProductName(text)}
              placeholderTextColor='#716D6E'
              value={productName}
            />
            <Styled.InputQuantityProduct
              keyboardType='numeric'
              onChangeText={text => setQuantity(text)}
              value={quantity}
              placeholder='qtd'
              placeholderTextColor='#716D6E'
            />
          </Styled.ContainerInput>
          <Styled.ContainerValue>
            <Styled.InputQuantityProduct
              onChangeText={text => setPrice(text)}
              keyboardType='numeric'
              value={price}
              placeholderTextColor='#716D6E'
              placeholder='9,99'
            />
            <Styled.ButtonAddProduct onPress={handleAddProduct}>
              <Styled.ButtonAddProductText>
                adicionar
              </Styled.ButtonAddProductText>
            </Styled.ButtonAddProduct>
          </Styled.ContainerValue>
        </Styled.ContainerList>
        <Styled.TitleContainer>
          <Styled.Title>
            produtos adicionados
          </Styled.Title>
        </Styled.TitleContainer>
        <Styled.ContainerListProducts>
          <ListProducts
            data={listProducts}
            currentValue={totalValue}
          />
        </Styled.ContainerListProducts>

        <Styled.ButtonsContainer>
          <Styled.CancelButton>
            <Styled.CancelButtonText>
              cancelar
            </Styled.CancelButtonText>
          </Styled.CancelButton>
          <Styled.SalveButton>
            <Styled.SalveButtonText>
              salvar
            </Styled.SalveButtonText>
          </Styled.SalveButton>
        </Styled.ButtonsContainer>
      </Styled.Container>
    </>
  )
}