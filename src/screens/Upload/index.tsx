import { Header } from '@components/Header/Header';
import { Image } from "native-base";

import * as Styled from './styled';
import UploadFile from '@assets/newUpload.png'

export function Upload() {
  return (
    <>
      <Header title='upload' />
      <Styled.Container>
        <Styled.ContainerImage>
          <Image
            source={UploadFile}
            width="100px"
            height="100px"
            alt="item checked"
          />
        </Styled.ContainerImage>
        <Styled.Title>
          Faca o upload do comprovante de sua compra
        </Styled.Title>

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