import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PokebolaSacola} from "../componentes/pokebolaSacola";

export default function Cabecalho() {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>
                    Pokémons
                </Text>
                <PokebolaSacola/>
            </View>
            <View >
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