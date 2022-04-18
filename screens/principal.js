import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Produto from './produto';
import Detalhes from './detalhes';

import Icon from 'react-native-vector-icons';

 
export default function Principal() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>setProdutos(json));

    }, []);


    useEffect(() => {
        console.log(produtos)
    }, [produtos]);

    

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../src/assets/logo.png')}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>LANÇAMENTOS</Text>
                <Text style={[styles.text, {color: '#878787'}]}> - 2022</Text>
            </View>
            <View style={styles.line} />
            <ScrollView>

                
            {/* <View style={styles.grid}>
                { produtos.map(produto => 
                    <Detalhes titulo={'GAMES'} descricao={'Pequeno Resumo'} />
                ) }
                
                
                     
            </View> */}
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={produtos}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Produto item={item} titulo={item.title} descricao={`$$ ${item.price}`} imagem={item.image} />
                        );
                    }}
                />


            </ScrollView>

        </View>
        
    )

    
};

const styles = StyleSheet.create({
    header:{
        marginBottom: 8,
        paddingTop: 40
    },
    container: {
        backgroundColor: '#191919',
        width: '100%'
    },
    image: {
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '2%',
        marginHorizontal: '5%'
    },
    text: {
       // fontFamily: 'Roboto',
        fontSize: 18,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#878787',
        borderBottomWidth: 3
    },
    grid: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start' // if you want to fill rows left to right
      },
});

