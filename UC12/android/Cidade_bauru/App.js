import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView, Image
} from "react-native"
export default function App() {

  return (
    <SafeAreaView style={styles.estilodabarra}>
      <StatusBar translucent={false} backgroundColor='#ffffff' barStyle='dark-content' />
      <View style={styles.espacobaixobarrastatus} />
      <ScrollView>
        <View style={styles.fundocabecalho}>
          <Text style={styles.cabecalho}> Laurinha </Text>
          
        </View>
        <View style={styles.textoalinhamento}>
          <View style={styles.bordaTexto}>
            <Text style={styles.texto}>Tem 19 anos, nasceu em 2004 de julho no dia quem leu, meu pau te comeu
              {'\n'} {'\n'}
              O aquecimento global e o efeito estufa são fenômenos interligados que têm implicações significativas para o nosso planeta. Vamos explorar cada um deles:
              {'\n'} {'\n'}
              1. **Efeito Estufa:**
              O efeito estufa é um processo natural e vital para a vida na Terra. Ele ocorre quando certos gases na atmosfera, como dióxido de carbono (CO2), metano (CH4) e óxidos de nitrogênio (NOx), absorvem parte da radiação solar que é refletida pela superfície da Terra. Esses gases, conhecidos como gases de efeito estufa, atuam como uma cobertura térmica, retendo o calor e mantendo a temperatura da Terra em um nível adequado para a vida.
              {'\n'} {'\n'}
              2. **Aquecimento Global:**
              O problema surge quando há um aumento significativo na concentração desses gases de efeito estufa, principalmente devido às atividades humanas, como queima de combustíveis fósseis, desmatamento e processos industriais. Esse aumento na concentração intensifica o efeito estufa, levando a um aumento na temperatura média da Terra, conhecido como aquecimento global.
              {'\n'} {'\n'}
              Os impactos do aquecimento global são amplos e incluem o derretimento das calotas polares, elevação do nível do mar, eventos climáticos extremos (como furacões e secas), mudanças nos padrões de precipitação, e alterações nos ecossistemas e na biodiversidade. Além disso, o aquecimento global tem implicações sérias para a segurança alimentar, a saúde humana e a estabilidade econômica.
              {'\n'} {'\n'}
              3. **Mitigação e Adaptação:**
              A mitigação do aquecimento global envolve a redução das emissões de gases de efeito estufa por meio de práticas sustentáveis, transição para fontes de energia renovável e a implementação de tecnologias mais limpas. A adaptação é igualmente crucial e implica a preparação para as mudanças inevitáveis que já estão em curso.
              {'\n'} {'\n'}
              A conscientização global e ações coletivas são essenciais para enfrentar esses desafios e trabalhar em direção a um futuro sustentável. O entendimento do efeito estufa e suas ramificações no contexto do aquecimento global é fundamental para orientar políticas, práticas e escolhas individuais que promovam a preservação do nosso planeta.
            </Text>
          </View>
          <View style={styles.espacoAbaixoBarraStatus} />

          <View style={styles.bordaimagem}>
            <View style={styles.imagemContainer}>
              <View style={styles.imagem}>
                <Image source={require('./img/bauru.jpeg')}
                  style={{ width: 300, height: 150 }} />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  estilodabarra: {
    flex: 1,
    backgroundColor: '#818274'
  },
  espacobaixobarrastatus: {
    height: 15,
    backgroundColor: '#A3AB78'
  },
  cabecalho: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    textAlignVertical: 'center',
    fontStyle: 'italic'
  },
  fundocabecalho: {
    backgroundColor: '#506266',
    padding: 10,
    justifyContent: 'center',
    fontStyle: 'italic'
    //laurinha
  },
  textoalinhamento: {
    flex: 1,
    padding: 20
  },
  texto: {
    textAlign: 'justify'
  },
  texto: {
    textAlign: 'justify'
  },
  bordaTexto: {
    borderWidth: 1,
    borderColor: '#BDE038',
    borderRadius: 8,
    padding: 15
  },
  espacoAbaixoBarraStatus: {
    height: 10,
    // backgroundColor: 'red'
  },
  imagem: {
    resizeMode: 'cover', //cobre completamente o container
    borderRadius: 8
  },
  bordaimagem: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center', //centralizar verticalmente
    alignItems: 'center' //centralizar horizontalmente
  }
})