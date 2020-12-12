import React, { useState, useEffect, useCallback } from 'react';
import { Switch, View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {} from 'react/cjs/react.development';
const tempdata = [];
const ColorOption = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const handleSwitch = useCallback(() => {
    toggleSwitch();
    let index = tempdata.indexOf(props.color);
    !isEnabled ? tempdata.push(props.color) : tempdata.splice(index, 1);
    props.set(tempdata);
    console.log(tempdata);
  }, []);

  return (
    <View style={styles.children}>
      <Text>{props.color.colorName}</Text>
      <Switch
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        value={isEnabled}
        onValueChange={handleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  children: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default ColorOption;
