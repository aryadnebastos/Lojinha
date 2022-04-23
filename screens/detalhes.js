import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detalhes({route}) {
    const { titulo, descricao, imagem } = route.params;

    const comprar = () => {
        Alert.alert(
          "Adicionar ao Carrinho",
          "Deseja adicionar o item ao seu carrinho? ",
          [
            {
              text: "Voltar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        ); 
    };

    return (

        <ScrollView style={styles.ordena}> 
            <View style={styles.container}>
                <Image
                    source={{
                        uri: imagem
                    }}
                    style={styles.detalhesImg}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.detalhesText}>
                    {titulo}
                </Text>
                <View style={styles.line}/>
                <Text style={styles.subtexto}>
                    {descricao}
                </Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => comprar()} style={styles.btnShop}>
                    <Text style={styles.shopText}>COMPRAR</Text>
                </TouchableOpacity>
            </View>

           
           
        </ScrollView>
          

        
    );
};


const styles = StyleSheet.create({
    ordena:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: '5%',
    },
    container:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '100%',
        height: 500,
        alignSelf: 'center',
        alignContent: 'center',
        padding: '2%',
        borderColor: '#0000FF',
        borderWidth: 0
    },
    detalhesImg:{
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: '2%',
        borderColor: '#FF0000',
        borderWidth: 0
    },
    containerText:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        padding: '1%',
        borderColor: '#FF0000',
        borderWidth: 0
    },
    detalhesText: {
        minHeight: 60,
        paddingVertical: '5%',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        borderColor: '#0000FF',
        borderWidth: 0
    },
    subtexto: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 14,
        padding: '5%',
    },
    shopText: {
        color: '#FFF',
        fontSize: 18
    },
    btnShop: {
        backgroundColor: '#FA8072',
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    line:{
        borderBottomColor: '#878787',
        borderBottomWidth: 3
    },
});
