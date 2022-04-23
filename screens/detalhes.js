import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detalhes({route}) {
    const { titulo, descricao, imagem } = route.params;

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
                <Text>
                    {titulo}
                </Text>
                <Text>
                    {descricao}
                </Text>
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
    detalhesText: {
        height: 120,
        paddingVertical: '2%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16
    },
    subtexto: {
        paddingTop: 5,
        height: 20,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 14
    },
    line:{
        borderBottomColor: '#878787',
        borderBottomWidth: 3
    },
});
