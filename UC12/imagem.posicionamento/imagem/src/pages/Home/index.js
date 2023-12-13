import { useNavigation } from "@react-navigation/native"
import React from "react";
import { Button, ImageBackground, SafeAreaView, View } from "react-native";

export default function Home(){

    const navigation = useNavigation()
    return(
        <SafeAreaView>

        <ImageBackground
        source={require('../../img/bauru4.jpg')}
        style={StyleSheet.backgroundImagem}/>
        <View style={styles.ajustenatela}>
            <Text style={styles.texto1}>
                Seja bem-vindo ao portal sobre a Cidade de Bauru
            </Text>
            <View style={styles.separador}>
                <Button title="Economia" 
                onPress={() => navigation.navigate('Economia')}></Button>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundImagem:{
        flex:1
    },

})