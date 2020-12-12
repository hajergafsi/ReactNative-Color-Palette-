import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import ColorSquare from '../components/ColorSquare';

const Home = ({ navigation }, route, props) => {
  /*console.log(props.route.params);*/
  const state = useNavigationState((state) => state);
  console.log(state.routes[0].params);
  const [palettes, setPalettes] = useState([]);
  /*const [newPalette, setNewPalette] = useState([]);*/
  const updated = state.routes[0].params
    ? state.routes[0].params.newPalette
    : null;
  console.log(updated);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const palettes = await result.json();
    if (result.ok) {
      setPalettes(palettes);
    }
  });
  useEffect(() => {
    handleRrefresh();
  }, []);
  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const handleRrefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();

    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    if (updated) {
      setPalettes((current) => [updated, ...current]);
    }
  }, [updated]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Add New Palette');
            }}
          >
            <Text style={styles.add}>Add a color scheme</Text>
          </TouchableOpacity>
        }
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPalette', {
                paletteName: item.paletteName,
                colors: item.colors,
              });
            }}
            style={styles.menu}
          >
            <Text style={styles.menu}>{item.paletteName}</Text>
            <FlatList
              style={{ flexDirection: 'row' }}
              data={item.colors.slice(0, 5)}
              keyExtractor={(item) => item.colorName}
              renderItem={({ item }) => <ColorSquare colorHEX={item.hexCode} />}
            />
          </TouchableOpacity>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRrefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
  add: {
    paddingTop: 10,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00A0B0',
  },
});

export default Home;
