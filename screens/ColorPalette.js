import React from 'react';
import { StyleSheet, FlatList, Text, View, SafeAreaView } from 'react-native';
import ColorBox from '../components/ColorBox';
import { NavigationContainer } from '@react-navigation/native';
import {} from '@react-navigation/stack';

const ColorPalette = (props) => {
  return (
    <View style={[styles.container]}>
      <Text
        style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'flex-start' }}
      >
        {props.route.params.paletteName}
      </Text>
      <FlatList
        data={props.route.params.colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHEX={item.hexCode} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    paddingVertical: 20,
  },
});

export default ColorPalette;
