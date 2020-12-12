import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, FlatList, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import AddNewPalette from './screens/AddNewPalette';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen style={styles.main} name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer style={styles.main}>
      <RootStack.Navigator mode="modal" style={styles.main}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Add New Palette" component={AddNewPalette} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    alignItems: 'center',
  },
});
export default App;
