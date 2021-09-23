import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, Image, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";

export const Item = ({ imagem, titulo }) => {
    const navigation = useNavigation();
    return (

        <View style={styles.containerItem} >
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.texto}>{titulo}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    texto: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#848486',
    },
    imagem: {
        height: 84
    },
})