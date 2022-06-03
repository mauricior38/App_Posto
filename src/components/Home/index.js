import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
} from 'react-native';
import {
  Container,
  Img,
  Imgvw,
  Titulo,
  GasolinaArea,
  GasolinaTexto,
  Input,
  BotaoCalcular,
  BotaoTexto,
  BotaoArea,
  ModalContainer,
  BotaoAreaModal,
  BotaoFecharModal,
  BotaoTextoModal,
  AreaTextoModal,
  TextoModal,
  ImgModal,
  ImgModalArea,
} from './styles';

export default function Home() {
  const [modal, setModal] = useState(true);
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [calc, setCalc] = useState('');
  const [imgCond, setImgCond] = useState('');

  function calcular() {
    if (gasolina === '') {
      alert('Preencha todos os campos');
    } else {
      var gaso = parseInt(gasolina);
      var alc = parseInt(alcool);
      let CalcResultado = gaso / alc;

      if (CalcResultado > 2) {
        setImgCond(
          'https://w7.pngwing.com/pngs/574/8/png-transparent-green-map-marker-logo-computer-icons-map-location-logo-logo-internet-map-thumbnail.png',
        );
      } else {
        setImgCond(
          'https://imagensemoldes.com.br/wp-content/uploads/2020/08/Bot%C3%A3o-X-Vermelho-PNG-1024x1024.png',
        );
      }

      setModal(true);
      setGasolina('');
      setAlcool('');
      setCalc(CalcResultado);
    }
  }

  function fecharModal() {
    setModal(false);
  }

  return (
    <Container>
      <Imgvw>
        <Img
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1986/1986894.png',
          }}
        />
        <Titulo> Qual é a melhor opção?</Titulo>
      </Imgvw>

      <GasolinaArea>
        <GasolinaTexto>Qual o valor da Gasolina?</GasolinaTexto>

        <Input
          placeholder="Ex: 4,69"
          placeholderTextColor="#717070"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={text => setGasolina(text)}
        />
      </GasolinaArea>

      <GasolinaArea>
        <GasolinaTexto>Qual o valor do alcool?</GasolinaTexto>

        <Input
          placeholder="Ex: 4,69"
          placeholderTextColor="#717070"
          keyboardType="numeric"
          value={alcool}
          onChangeText={text => setAlcool(text)}
        />
      </GasolinaArea>
      <BotaoArea>
        <BotaoCalcular onPress={calcular}>
          <BotaoTexto>Calcular</BotaoTexto>
        </BotaoCalcular>
      </BotaoArea>

      <View>
        <Modal animationType="slide" visible={modal} transparent={true}>
          <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'}>
            <ImgModalArea>
              <ImgModal
                source={{
                  uri: `${imgCond}`,
                }}
              />
            </ImgModalArea>
            <AreaTextoModal>
              <TextoModal>
                {calc < 7
                  ? 'Vale a pena colocar Alcool!'
                  : 'Vale a pena colocar alcool'}
              </TextoModal>
            </AreaTextoModal>
            <BotaoAreaModal>
              <BotaoFecharModal onPress={fecharModal}>
                <BotaoTextoModal>Encerrar pesquisa</BotaoTextoModal>
              </BotaoFecharModal>
            </BotaoAreaModal>
          </ModalContainer>
        </Modal>
      </View>
    </Container>
  );
}
