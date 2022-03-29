import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Detalhes from '../screens/detalhes';

import Icon from 'react-native-vector-icons';

 
export default function Principal() {
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
                <Text style={styles.text}>GAMES</Text>
                <Text style={[styles.text, {color: '#878787'}]}> - VIRTUAL REALITY</Text>

            </View>

            <View style={styles.line} />

            <ScrollView>
               
            <View style={styles.textContainer}>
                <Text style={styles.text}>LANÇAMENTOS</Text>
            </View>
                
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Detalhes/>
                <Detalhes/>        
            </View>


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
    }
});

