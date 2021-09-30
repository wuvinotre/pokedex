import {Image, View, StyleSheet} from "react-native";
import pokebolaImagem from "../assets/icons/pokebola.jpg";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";

export const PokebolaSacola = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPressIn={() => navigation.push('Checkout')}>
            <View style={styles.pokebola}>
                <Image
                    source={pokebolaImagem}
                    style={styles.imagem}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imagem: {
        height: 36,
        width: 36,
    },
    pokebola: {
        padding: 18,
    },
})