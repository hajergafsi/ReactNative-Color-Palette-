import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  return (
    <View style={[{ backgroundColor: props.colorHEX }, styles.box]}>
      <Text
        style={[
          styles.textbox,
          props.colorHEX > '#F0F7FF' ? styles.black : null,
        ]}
      >
        {props.colorName}: {props.colorHEX}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 9,
    paddingVertical: 10,
    width: 350,
    borderRadius: 3,
  },
  black: {
    color: 'black',
  },
  textbox: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
