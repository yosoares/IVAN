import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native"
 
const App = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[3]} >
      <StatusBar backgroundColor="black" barstyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cidade Bauru - Sp</Text>
          {/* Texto */}
        </View>
        <View style={styles.distancia}>
          <Text style={styles.conteudo}>
            Segue abaixo uma porrada de texto extremamente desnecessario. Bauru
            é u municipio brasileiro do interior de São Paulo, sendo o mais
            populoso do Centro-Oeste paulista. É uma das 19 cidades que integram
            a egião imediata de Bauru, por sua vez, é uma das quatro regiões que
            integram a região intermediaria de bauru, que é formaa por 48
            cidades E NINGUEM LIGA.
          </Text>
          <Image source={require("./img/bauru.jpeg")} style={styles.image} />
        </View>
        <View style={styles.espaço}>
          <Text style={styles.conteudo2}>
            MAIS TEXO CHATO Bauru é conhecida por um danuiche que leva o mesmo
            nome, criado pelo advogado bauruense Casimiro Pinto Neto no bar
            Ponto Chic, localizado no Largo do Paiaçandu, na cidade de São
            Paulo, em 1934, quando era aluno da Faculdade de Direito da
            Universidade de São Paulo. Mais tarde, o sanduiche ganhou fama
            devido ao bar "Zé do Esquinão", durante decadas instalado no centro
            de bauru.
          </Text>
          <Image source={require("./img/bauru2.jpg")}
          style={styles.image} />
        </View>
        <View style={styles.secaoesquerda} >
          <Image source={require('./img/bauru3.jpg')} />
          <Text style={styles.sectinText} >
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010326",
  },
  header: {
    backgroundColor: "#010330",
    padding: 20,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  espaço:{
    padding:10,
    marginTop:10,
  },
  distancia: {
    padding: 10,
    marginTop: 5,
  },
  secaoesquerda:{
    flexDirection: 'row',
    padding: 10,
  },
  conteudo: {
    backgroundColor: "#F2A679",
    fontSize: 16,
    textAlign: "justify",
  },
  conteudo2:{
    backgroundColor:'#F26E50',
    fontSize:16,
    textAlign:'justify',
    padding:5,
    marginTop:5,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  imagemEsquerda:{
    width:100,
    height:150,
    resizeMode: 'cover',
  }
})
 
export default App;