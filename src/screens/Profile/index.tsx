import { MaterialIcons } from '@expo/vector-icons';

import { Header } from '@components/Header/Header';
import * as Styled from './styles';
import { UsePhoto } from '@components/UsePhoto';
import { LabelInfo } from './LabelInfo';

export function Profile() {
  const List = {
    label: 'Nome',
    text: 'Wesley'
  }
  return (
    <>
      <Header title='perfil' />
      <Styled.Container>
        <Styled.ContainerImage>
          <Styled.ButtonEdit>
            <MaterialIcons name="edit" color="#fff" size={18} />
          </Styled.ButtonEdit>
          <UsePhoto
            source={{
              uri: 'https://github.com/w3sll3y.png'
            }}
            size={120}
            alt="Profile image"
          />
        </Styled.ContainerImage>

        <Styled.InfoContainer>
          <Styled.InfoContainerFirstColumn>
            <LabelInfo limitChar={20} size={200} label="Nome:" text="Wesley Almeida Fernandes" />
            <LabelInfo limitChar={10} size={120} label="CEP:" text="**********" />
            <LabelInfo limitChar={30} size={200} label="Endereco:" text="R Nova Brasilia" />
            <LabelInfo limitChar={20} size={120} label="Username:" text="Wesley" />
          </Styled.InfoContainerFirstColumn>
          <Styled.InfoContainerSecondColumn>
            <LabelInfo limitChar={10} size={120} label="E-mail:" text="**@tes**.com" />
            <LabelInfo limitChar={10} size={120} label="Numero:" text="12" />
            <LabelInfo limitChar={10} size={120} label="complemento:" text="Altossssssssssssss" />
            <Styled.AlterPasswordButton>
              <Styled.AlterPasswordText>
                alterar senha
              </Styled.AlterPasswordText>
            </Styled.AlterPasswordButton>
          </Styled.InfoContainerSecondColumn>
        </Styled.InfoContainer>
        <Styled.FooterButtonContainer>
          <Styled.FooterButton>
            <Styled.FooterButtonText>
              editar
            </Styled.FooterButtonText>
          </Styled.FooterButton>
        </Styled.FooterButtonContainer>
      </Styled.Container>
    </>
  )
}