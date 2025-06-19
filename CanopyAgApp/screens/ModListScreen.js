import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function ModListScreen({ navigation }) {
  const [mods, setMods] = useState([]);

  const fetchMods = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/mods/', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setMods(data);
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchMods);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Add Mod" onPress={() => navigation.navigate('AddMod')} />
      <FlatList
        data={mods}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.modItem}>
            <Text style={styles.modTitle}>{item.identifier}</Text>
            <Text>Plant: {item.plant_type}</Text>
            <Text>Growth: {item.growth_method}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No mods found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  modItem: { padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
  modTitle: { fontWeight: 'bold', fontSize: 16 },
}); 