import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
//import * as React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';



export default function Login({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [logo] = useState(new Animated.ValueXY({ x: 300, y: 100 }));

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        })
    };

    useEffect(() => {

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);


        Animated.spring(offset.y, {
            toValue: 0,
            speed: 3,
            bounciness: 15,
            useNativeDriver: true
        }).start();
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 210,
                duration: 100
            }),
            Animated.timing(logo.y, {
                toValue: 70,
                duration: 100,
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 300,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false
            }),
        ]).start();
    };

    return (

        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y,
                    }}
                    source={require('../src/assets/lojinha.png')}
                    resizeMode='contain'
                />
            </View>


            <Animated.View style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: offset.y
                        }
                    ]
                }
            ]}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
            </Animated.View>

            <TouchableOpacity onPress={() => entrar()} style={styles.btnSubmit}>
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.registerText}>Criar Cadastro</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#FFF',
        fontSize: 18
    },
    btnRegister: {
        marginBottom: 10,
        paddingBottom: 10
    },
    registerText: {
        color: '#1C1C1C',
        padding: 20
    }

});