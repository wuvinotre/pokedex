import React from "react";
import {Image ,View, Text, StyleSheet} from "react-native";

export const DescricaoItem = ({
imagem, titulo, itemDesc, evolucao, numero
                              }) => {
    return <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{titulo}</Text>
                            <Text style={styles.textoInferior}>Nº {numero}</Text>
                        </View>
                        <Image source={imagem} style={styles.imagem}/>
                    </View>
                    <Text style={styles.textoDescricao}>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.textoEvolucao}>Evoluções: {evolucao}</Text>
                    </View>
                </View>
            </View>
    </View>
}

const styles = StyleSheet.create({
    itemContainer:{
        flex: 5,
        marginTop: -250,
    },
    itemPosicao:{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4,
    },
    textoPosicao:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem:{
        width: 100,
        height: 100,
    },
    textoSuperior:{
        fontFamily: 'bold',
        fontSize: 30,
        marginBottom: 4,
    },
    textoInferior:{
    fontSize: 20,
    color: '#CACACA',
    marginBottom: 12,
    },
    textoDescricao:{
        fontFamily: 'bold',
        fontSize: 20,
        marginTop: 5,
        color: '#ACAAAB'
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textoEvolucao:{
        fontFamily: 'bold',
        fontSize: 18,
        color: 'black'
    }

})