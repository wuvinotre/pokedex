import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import {Background} from "./fundo";
import {DescricaoItem} from "./descricaoItem";

export const DetalhesPokemon = ({ route }) => {
    const { imagem, titulo, itemDesc, evolucao, id, estudio, numero } = route.params;
    return (
        <View style={styles.container}>
            <Background/>
            <DescricaoItem
                imagem={imagem}
                titulo={titulo}
                itemDesc={itemDesc}
                evolucao={evolucao}
                id={id}
                numero={numero}
                estudio={estudio}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})