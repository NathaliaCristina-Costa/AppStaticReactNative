import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Icon from "./assets/imagem/icon.jpg";
import Capa from "./assets/imagem/capa.png";
import Perfil from "./assets/imagem/eu.jpg";

export default function App() {
  return (
    <View>
      <Image source={Capa} style={styles.imagem1}/>
      <View style={styles.container}>
          <Image source={Perfil} style={styles.imagem2}/>
          <Text style={styles.titulo}>Nathália Cristina</Text>
          <Text style={styles.conteudo}>
            Desenvolvedora Full-Stack, com experiência em desenvolvimento web e infraestrutura. Trabalhei na participação do desenvolvimento de softwares e sistemas web. 
            Possuo conhecimento e experiencia nas lingugens de programação JavaScript, PHP e Python, além de experiencia com ferramentas do universo Node.js , React e Angular.
          </Text>
          <Image source={Icon} />
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  imagem1:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem2: {
    marginBottom: 20,
    width: 150,
    height: 150,
    borderRadius: 80,
    borderColor: '#703f8e',
    borderWidth: 2
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
    textAlign: "justify",
    
  },
  conteudo: {
    textAlign: "center",
    padding: 10,
    lineHeight: 20,
    marginBottom: 30,
  },
  icone: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
