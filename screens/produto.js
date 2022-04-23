import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


 
export default function Produto({ item, titulo , descricao, imagem }) {
    const navigation = useNavigation();

    const acessar = () => {
        navigation.navigate("Detalhes", { titulo, descricao, imagem }, );
    };


    return (
        <TouchableOpacity  onPress={() => acessar()} style={styles.ordena}>
            <View> 
                <Image
                    source={{
                        uri: imagem,
                    }}
                    style={styles.detalhesImg}
                    resizeMode='contain'
                />
            </View>
            <View> 
                <Text numberOfLines={2} style={styles.detalhesText}>{titulo}</Text>
            </View>
            <View style={styles.line}/>
            <Text style={styles.subtexto}>{descricao}</Text>
        </TouchableOpacity>
        
    );

    
};

const styles = StyleSheet.create({
    detalhesImg:{
        flex: 1, 
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: '2%',
        width: 150,
        height:100,
    },
    ordena:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        margin: 10,
        padding: 10,
    },
    detalhesText: {
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
