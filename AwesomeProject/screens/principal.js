import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

 
export default function Principal() {
    return (
        <View style= {styles.background}>
            <View style= {styles.containerTopo}>
                <Image 
                    source= {require=('../src/assets/logo.png')}
                />
            </View>
        </View>
        
    )

    
};

const styles = StyleSheet.create({

    containerTopo:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: 20,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});

