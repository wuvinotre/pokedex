import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Cabecalho from './mocks/cabecalho'
import { Data } from "./utils/data";
import { Item } from "./componentes/item";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={3}
                data={Data}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <Cabecalho />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    }
})
