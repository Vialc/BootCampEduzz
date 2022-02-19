import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import perfilImg from './assets/foto2.jpeg';
import Card from './components/Card';

const App = () => {

  return (
    <>
      {/* cabeçalho */}
      <View style={style.page}>
        <View style={style.headerConteiner}>
          <Image source={perfilImg} style={style.foto} />
          <Text style={style.nome}>Vitor Alcântara</Text>
          <Text style={style.funcao}>Desenvolvedor Full Stack</Text>
          <View style={style.socialBox}>
            <Icon name="github" style={style.socialIcons} color='#fff' />
            <Icon name="facebook" style={style.socialIcons} color='#fff' />
            <Icon name="linkedin" style={style.socialIcons} color='#fff' />
          </View>
        </View>
        {/* experiencia profissional */}
        <Card projectTitle="Game Genius - Bootcamp Eduzz" >
          <Text style={style.projectResume}>
            Jogo de memória estilo Genius desenvolvido durante participação
            no bootcamp da Eduzz. Além das melhorias de estilização, o projeto conta com
            uma otimização na 'funcionalidade de piscagem de cor' do jogo.
          </Text>
        </Card>

        <Card projectTitle="Game Genius - Bootcamp Eduzz" >
          <Text style={style.projectResume}>
            Jogo de memória estilo Genius desenvolvido durante participação
            no bootcamp da Eduzz. Além das melhorias de estilização, o projeto conta com
            uma otimização na 'funcionalidade de piscagem de cor' do jogo.
          </Text>
        </Card>

        <Card projectTitle="Game Genius - Bootcamp Eduzz" >
          <Text style={style.projectResume}>
            Jogo de memória estilo Genius desenvolvido durante participação
            no bootcamp da Eduzz. Além das melhorias de estilização, o projeto conta com
            uma otimização na 'funcionalidade de piscagem de cor' do jogo.
          </Text>
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#EE4B2B',
    flex: 1,
    alignItems: 'center',
  },
  headerConteiner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  texto: {
    color: "#000000"
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000000",
    marginTop: 10,
    marginBottom: 1
  },
  funcao: {
    color: "#939393",
  },
  socialBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 10
  },
  socialIcons: {
    backgroundColor: '#000',
    borderRadius: 125,
    fontSize: 25,
  },
  projectResume: {
    fontWeight: 'normal',
    color: "#939393",
  }
});

export default App;
