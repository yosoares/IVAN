import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView stickyHeaderIndices={[1]}>
        <StatusBar backgroundColor='cyan' barStyle='dark-content' />
        <View style={styles.espaco}></View>
        <View style={styles.fundocabecalho}>

          <Text style={styles.cabecalho}>Imagens</Text>
        </View>

<View style={styles.alinhamento}>
  <View style={styles.espaco}></View>
</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff',
  },
  espaco:{
    marginTop:20
  },
  fundocabecalho:{
    backgroundColor:'pink',
    padding:10,
    justifyContent:'center',
    alignItems: 'center'
  },
  cabecalho:{
    fontSize:20,
    fontWeight: 'bold',
    textAlign:'justify',
    textAlignVertical:'center',
    fontStyle:'italic'
  }
});
