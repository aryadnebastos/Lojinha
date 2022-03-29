import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';



 
export default function Detalhes() {
    return (
        <TouchableOpacity>
            <Image
                source={require('../src/assets/banner.png')}
                style={styles.detalhesImg}
            />
            <Text style={styles.detalhesText}>NOME DO GAME</Text>
            <Text style={styles.subtexto}>pequena descriçao</Text>
        </TouchableOpacity>
        
    );

    
};

const styles = StyleSheet.create({
    detalhesImg:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '2%',
    },
    detalhesText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtexto: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
