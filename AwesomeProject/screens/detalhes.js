import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';



 
export default function Detalhes({ titulo , descricao, imagem }) {
    return (
        <TouchableOpacity style={styles.ordena}>
            <Image
                source={{
                    uri: imagem,
                  }}
                style={styles.detalhesImg}
                resizeMode='contain'
            />
            <Text style={styles.detalhesText}>{titulo}</Text>
            <Text style={styles.subtexto}>{descricao}</Text>
        </TouchableOpacity>
        
    );

    
};

const styles = StyleSheet.create({
    detalhesImg:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '2%',
        width: 200,
        height:100,
    },
    ordena:{
        flex: 2,
        width: '50%',

    },
    detalhesText: {
        flex: 1,
        paddingVertical: '2%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16
    },
    subtexto: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 14
    },
});
