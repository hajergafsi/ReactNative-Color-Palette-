import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorSquare = (props) => {
  return (
    <View style={[{ backgroundColor: props.colorHEX }, styles.box]}></View>
  );
};
const styles = StyleSheet.create({
  box: {
    minWidth: 30,
    minHeight: 30,
    marginLeft: 5,
    borderRadius: 5,
  },
});
export default ColorSquare;
