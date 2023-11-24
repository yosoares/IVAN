import React from "react";
import { View, Text, StryleSheet } from "react-native";

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={StyleSheet.headerText}>Cidade de Bauru</Text>
      </View>
      
    </View>
  )
}

const style = StryleSheet.create({
  container: {
    flex: 1,
    backgroudColor: 'white',
  },
  header: {
    backgroudColor: 'red',
    padding: 20,
    alignItems: 'center',
  },
  headerText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default App