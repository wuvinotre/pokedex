import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const Item = ({ imagem, titulo, estudio, itemDesc, evolucao, id, numero }) => {
    const navigation = useNavigation();

    return (

        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesPokemon',{
            imagem,
            itemDesc,
            estudio,
            titulo,
            evolucao,
            id,
            numero,
        })}>
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>

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