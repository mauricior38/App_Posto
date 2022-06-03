import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #312828;
`;

export const Imgvw = styled.View`
  align-items: center;
  margin-top: 100;
`;

export const Img = styled.Image`
  background-color: white;
  border-radius: 100;
  width: 200;
  height: 200;
`;

export const Titulo = styled.Text`
  margin-top: 20;
  color: white;
  font-size: 30;
  font-weight: bold;
  justify-content: center;
`;

export const GasolinaArea = styled.View`
  justify-content: flex-start;

  margin-top: 20;
`;

export const GasolinaTexto = styled.Text`
  font-size: 15;
  color: #fff;
  margin-left: 15;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  border-radius: 10;
  padding: 20px;
  margin: 10px;
  color: black;
  size: 20px;
`;
export const BotaoArea = styled.View`
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

export const BotaoCalcular = styled.TouchableOpacity`
  background-color: #d95050;
  width: 40%;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const BotaoTexto = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ModalContainer = styled.View`
  background-color: #fff;
  height: 350px;
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30;
`;

export const BotaoAreaModal = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const BotaoFecharModal = styled.TouchableOpacity`
  background-color: #d95050;
  padding: 15px;
  border-radius: 10px;
`;
export const BotaoTextoModal = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const AreaTextoModal = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextoModal = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

export const ImgModalArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImgModal = styled.Image`
  background-color: white;
  border-radius: 100;
  width: 200;
  height: 200;
  margin-top: 15;
`;
