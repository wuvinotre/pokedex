import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomePage from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Detalhes } from './src/componentes/detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.home}>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhesPokemon"
            component={Detalhes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F4F0F4",
  }
})


