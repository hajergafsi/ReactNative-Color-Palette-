import React, { useState, useCallback } from 'react';
import {
  Alert,
  Switch,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import ColorOption from '../components/ColorOption';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF', selected: false },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7', selected: false },
  { colorName: 'Aqua', hexCode: '#00FFFF', selected: false },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4', selected: false },
  { colorName: 'Azure', hexCode: '#F0FFFF', selected: false },
  { colorName: 'Beige', hexCode: '#F5F5DC', selected: false },
  { colorName: 'Bisque', hexCode: '#FFE4C4', selected: false },
  { colorName: 'Black', hexCode: '#000000', selected: false },
  { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD', selected: false },
  { colorName: 'Blue', hexCode: '#0000FF', selected: false },
  { colorName: 'BlueViolet', hexCode: '#8A2BE2', selected: false },
  /*{ colorName: 'Brown', hexCode: '#A52A2A', selected: false },
  { colorName: 'BurlyWood', hexCode: '#DEB887', selected: false },
  { colorName: 'CadetBlue', hexCode: '#5F9EA0', selected: false },
  { colorName: 'Chartreuse', hexCode: '#7FFF00', selected: false },
  { colorName: 'Chocolate', hexCode: '#D2691E', selected: false },
  { colorName: 'Coral', hexCode: '#FF7F50', selected: false },
  { colorName: 'CornflowerBlue', hexCode: '#6495ED', selected: false },
  { colorName: 'Cornsilk', hexCode: '#FFF8DC', selected: false },
  { colorName: 'Crimson', hexCode: '#DC143C', selected: false },
  { colorName: 'Cyan', hexCode: '#00FFFF', selected: false },
  { colorName: 'DarkBlue', hexCode: '#00008B', selected: false },
  { colorName: 'DarkCyan', hexCode: '#008B8B', selected: false },
  { colorName: 'DarkGoldenRod', hexCode: '#B8860B', selected: false },
  { colorName: 'DarkGray', hexCode: '#A9A9A9', selected: false },
  { colorName: 'DarkGrey', hexCode: '#A9A9A9', selected: false },
  { colorName: 'DarkGreen', hexCode: '#006400', selected: false },
  { colorName: 'DarkKhaki', hexCode: '#BDB76B', selected: false },
  { colorName: 'DarkMagenta', hexCode: '#8B008B', selected: false },
  { colorName: 'DarkOliveGreen', hexCode: '#556B2F', selected: false },
  { colorName: 'Darkorange', hexCode: '#FF8C00', selected: false },
  { colorName: 'DarkOrchid', hexCode: '#9932CC', selected: false },
  { colorName: 'DarkRed', hexCode: '#8B0000', selected: false },
  { colorName: 'DarkSalmon', hexCode: '#E9967A', selected: false },
  { colorName: 'DarkSeaGreen', hexCode: '#8FBC8F', selected: false },
  { colorName: 'DarkSlateBlue', hexCode: '#483D8B', selected: false },
  { colorName: 'DarkSlateGray', hexCode: '#2F4F4F', selected: false },
  { colorName: 'DarkSlateGrey', hexCode: '#2F4F4F', selected: false },
  { colorName: 'DarkTurquoise', hexCode: '#00CED1', selected: false },
  { colorName: 'DarkViolet', hexCode: '#9400D3', selected: false },
  { colorName: 'DeepPink', hexCode: '#FF1493', selected: false },
  { colorName: 'DeepSkyBlue', hexCode: '#00BFFF', selected: false },
  { colorName: 'DimGray', hexCode: '#696969', selected: false },
  { colorName: 'DimGrey', hexCode: '#696969', selected: false },
  { colorName: 'DodgerBlue', hexCode: '#1E90FF', selected: false },
  { colorName: 'FireBrick', hexCode: '#B22222', selected: false },
  { colorName: 'FloralWhite', hexCode: '#FFFAF0', selected: false },
  { colorName: 'ForestGreen', hexCode: '#228B22', selected: false },
  { colorName: 'Fuchsia', hexCode: '#FF00FF', selected: false },
  { colorName: 'Gainsboro', hexCode: '#DCDCDC', selected: false },
  { colorName: 'GhostWhite', hexCode: '#F8F8FF', selected: false },
  { colorName: 'Gold', hexCode: '#FFD700', selected: false },
  { colorName: 'GoldenRod', hexCode: '#DAA520', selected: false },
  { colorName: 'Gray', hexCode: '#808080', selected: false },
  { colorName: 'Grey', hexCode: '#808080', selected: false },
  { colorName: 'Green', hexCode: '#008000', selected: false },
  { colorName: 'GreenYellow', hexCode: '#ADFF2F', selected: false },
  { colorName: 'HoneyDew', hexCode: '#F0FFF0', selected: false },
  { colorName: 'HotPink', hexCode: '#FF69B4', selected: false },
  { colorName: 'IndianRed', hexCode: '#CD5C5C', selected: false },
  { colorName: 'Indigo', hexCode: '#4B0082', selected: false },
  { colorName: 'Ivory', hexCode: '#FFFFF0', selected: false },
  { colorName: 'Khaki', hexCode: '#F0E68C', selected: false },
  { colorName: 'Lavender', hexCode: '#E6E6FA', selected: false },
  { colorName: 'LavenderBlush', hexCode: '#FFF0F5', selected: false },
  { colorName: 'LawnGreen', hexCode: '#7CFC00', selected: false },
  { colorName: 'LemonChiffon', hexCode: '#FFFACD', selected: false },
  { colorName: 'LightBlue', hexCode: '#ADD8E6', selected: false },
  { colorName: 'LightCoral', hexCode: '#F08080', selected: false },
  { colorName: 'LightCyan', hexCode: '#E0FFFF', selected: false },
  { colorName: 'LightGoldenRodYellow', hexCode: '#FAFAD2', selected: false },
  { colorName: 'LightGray', hexCode: '#D3D3D3', selected: false },
  { colorName: 'LightGrey', hexCode: '#D3D3D3', selected: false },
  { colorName: 'LightGreen', hexCode: '#90EE90', selected: false },
  { colorName: 'LightPink', hexCode: '#FFB6C1', selected: false },
  { colorName: 'LightSalmon', hexCode: '#FFA07A', selected: false },
  { colorName: 'LightSeaGreen', hexCode: '#20B2AA', selected: false },
  { colorName: 'LightSkyBlue', hexCode: '#87CEFA', selected: false },
  { colorName: 'LightSlateGray', hexCode: '#778899', selected: false },
  { colorName: 'LightSlateGrey', hexCode: '#778899', selected: false },
  { colorName: 'LightSteelBlue', hexCode: '#B0C4DE', selected: false },
  { colorName: 'LightYellow', hexCode: '#FFFFE0', selected: false },
  { colorName: 'Lime', hexCode: '#00FF00', selected: false },
  { colorName: 'LimeGreen', hexCode: '#32CD32', selected: false },
  { colorName: 'Linen', hexCode: '#FAF0E6', selected: false },
  { colorName: 'Magenta', hexCode: '#FF00FF', selected: false },
  { colorName: 'Maroon', hexCode: '#800000', selected: false },
  { colorName: 'MediumAquaMarine', hexCode: '#66CDAA', selected: false },
  { colorName: 'MediumBlue', hexCode: '#0000CD', selected: false },
  { colorName: 'MediumOrchid', hexCode: '#BA55D3', selected: false },
  { colorName: 'MediumPurple', hexCode: '#9370D8', selected: false },
  { colorName: 'MediumSeaGreen', hexCode: '#3CB371', selected: false },
  { colorName: 'MediumSlateBlue', hexCode: '#7B68EE', selected: false },
  { colorName: 'MediumSpringGreen', hexCode: '#00FA9A', selected: false },
  { colorName: 'MediumTurquoise', hexCode: '#48D1CC', selected: false },
  { colorName: 'MediumVioletRed', hexCode: '#C71585', selected: false },
  { colorName: 'MidnightBlue', hexCode: '#191970', selected: false },
  { colorName: 'MintCream', hexCode: '#F5FFFA', selected: false },
  { colorName: 'MistyRose', hexCode: '#FFE4E1', selected: false },
  { colorName: 'Moccasin', hexCode: '#FFE4B5', selected: false },
  { colorName: 'NavajoWhite', hexCode: '#FFDEAD', selected: false },
  { colorName: 'Navy', hexCode: '#000080', selected: false },
  { colorName: 'OldLace', hexCode: '#FDF5E6', selected: false },
  { colorName: 'Olive', hexCode: '#808000', selected: false },
  { colorName: 'OliveDrab', hexCode: '#6B8E23', selected: false },
  { colorName: 'Orange', hexCode: '#FFA500', selected: false },
  { colorName: 'OrangeRed', hexCode: '#FF4500', selected: false },
  { colorName: 'Orchid', hexCode: '#DA70D6', selected: false },
  { colorName: 'PaleGoldenRod', hexCode: '#EEE8AA', selected: false },
  { colorName: 'PaleGreen', hexCode: '#98FB98', selected: false },
  { colorName: 'PaleTurquoise', hexCode: '#AFEEEE', selected: false },
  { colorName: 'PaleVioletRed', hexCode: '#D87093', selected: false },
  { colorName: 'PapayaWhip', hexCode: '#FFEFD5', selected: false },
  { colorName: 'PeachPuff', hexCode: '#FFDAB9', selected: false },
  { colorName: 'Peru', hexCode: '#CD853F', selected: false },
  { colorName: 'Pink', hexCode: '#FFC0CB', selected: false },
  { colorName: 'Plum', hexCode: '#DDA0DD', selected: false },
  { colorName: 'PowderBlue', hexCode: '#B0E0E6', selected: false },
  { colorName: 'Purple', hexCode: '#800080', selected: false },
  { colorName: 'Red', hexCode: '#FF0000', selected: false },
  { colorName: 'RosyBrown', hexCode: '#BC8F8F', selected: false },
  { colorName: 'RoyalBlue', hexCode: '#4169E1', selected: false },
  { colorName: 'SaddleBrown', hexCode: '#8B4513', selected: false },
  { colorName: 'Salmon', hexCode: '#FA8072', selected: false },
  { colorName: 'SandyBrown', hexCode: '#F4A460', selected: false },
  { colorName: 'SeaGreen', hexCode: '#2E8B57', selected: false },
  { colorName: 'SeaShell', hexCode: '#FFF5EE', selected: false },
  { colorName: 'Sienna', hexCode: '#A0522D', selected: false },
  { colorName: 'Silver', hexCode: '#C0C0C0', selected: false },
  { colorName: 'SkyBlue', hexCode: '#87CEEB', selected: false },
  { colorName: 'SlateBlue', hexCode: '#6A5ACD', selected: false },
  { colorName: 'SlateGray', hexCode: '#708090', selected: false },
  { colorName: 'SlateGrey', hexCode: '#708090', selected: false },
  { colorName: 'Snow', hexCode: '#FFFAFA', selected: false },
  { colorName: 'SpringGreen', hexCode: '#00FF7F', selected: false },
  { colorName: 'SteelBlue', hexCode: '#4682B4', selected: false },
  { colorName: 'Tan', hexCode: '#D2B48C', selected: false },
  { colorName: 'Teal', hexCode: '#008080', selected: false },
  { colorName: 'Thistle', hexCode: '#D8BFD8', selected: false },
  { colorName: 'Tomato', hexCode: '#FF6347', selected: false },
  { colorName: 'Turquoise', hexCode: '#40E0D0', selected: false },
  { colorName: 'Violet', hexCode: '#EE82EE', selected: false },
  { colorName: 'Wheat', hexCode: '#F5DEB3', selected: false },
  { colorName: 'White', hexCode: '#FFFFFF', selected: false },
  { colorName: 'WhiteSmoke', hexCode: '#F5F5F5', selected: false },
  { colorName: 'Yellow', hexCode: '#FFFF00', selected: false },
  { colorName: 'YellowGreen', hexCode: '#9ACD', selected: false },*/
];

const ColorPaletteModal = ({ navigation }, route, props, params) => {
  const state = useNavigationState((state) => state);
  const [selectedColors, setSelectedColors] = useState([]);
  const [paletteName, setPaletteName] = useState('');
  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please add a name to your color palette');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please choose at least 3 colors');
    } else {
      navigation.navigate('Home', {
        newPalette: { paletteName: paletteName, colors: selectedColors },
      });
    }
  }, [paletteName, selectedColors]);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name of your color palette</Text>
      <TextInput
        placeholder="Palette name"
        style={styles.input}
        onChangeText={setPaletteName}
      />
      <FlatList
        style={styles.list}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorOption
            color={item}
            selectedColors={selectedColors}
            set={setSelectedColors}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 5,
    marginTop: 7,
  },

  list: {
    marginTop: 20,
  },
  button: {
    borderRadius: 3,
    paddingVertical: 10,
    backgroundColor: '#00A0B0',
    height: 40,
  },
});

export default ColorPaletteModal;
