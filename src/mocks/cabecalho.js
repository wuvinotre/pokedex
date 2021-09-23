import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import pokebolaImagem from '../assets/icons/pokebola.jpg'

export default function Cabecalho() {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>
                    Pokémons
                </Text>
                <View style={styles.pokebola}>
                    <Image
                        source={pokebolaImagem}
                        style={styles.imagem}
                    />
                </View>
            </View>
            <View style={styles.ContainerDescricao}>
                <View style={styles.separador} />
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Pokémons Iniciais</Text>
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F0F4",
    },
    containerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 24,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,

    },
    imagem: {
        height: 35,
        width: 35,
    },
    pokebola: {
        padding: 18,

    },
    ContainerDescricao: {
        paddingHorizontal: 24,
    },
    separador: {
        borderWidth: 0.6,
        borderColor: '#A1A5AA'
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
    },
    textoDescricao: {
        padding: 15,
        backgroundColor: "#F4F0F4",
        fontSize: 18,
        color: '#A1A5AA'
    }
})