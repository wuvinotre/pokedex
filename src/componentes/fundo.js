import React from "react";
import {Image, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {PokebolaSacola} from "./pokebolaSacola";

const windowWidth = Dimensions.get('window').width;

export const Background = () => {
    const imSrc = require('../assets/fundo/mapaGo.jpg');
    const navigation = useNavigation();

    return (
        <View style={styles.bgContainer}>
            <ImageBackground
                resizeMode="cover"
                source={imSrc}
                style={styles.imagemFundo}>
                <TouchableOpacity onPressIn={() => navigation.push('HomePage')}>
                    <View style={styles.headerContainer}>
                        <Image source={require('../assets/icons/flecha.png')}
                        style={styles.imagemSeta}/>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
</View>
    );
};

const styles = StyleSheet.create({
    bgContainer:{
        flex:6,
    },
    imagemFundo:{
        width: windowWidth,
        height: '100%',
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagemSeta:{
    width: 48,
    height: 48,
    marginTop: 36,
    marginLeft: 24,
    },
    containerSacola: {
        padding: 18,
    }
})