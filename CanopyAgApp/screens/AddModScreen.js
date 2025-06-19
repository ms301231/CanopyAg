import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddModScreen({ navigation }) {
  const [identifier, setIdentifier] = useState('');
  const [plantType, setPlantType] = useState('');
  const [growthMethod, setGrowthMethod] = useState('soil');

  const handleAddMod = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/mods/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ identifier, plant_type: plantType, growth_method: growthMethod }),
      });
      if (response.ok) {
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Could not add mod.');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not connect to server.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Mod</Text>
      <TextInput
        style={styles.input}
        placeholder="Identifier"
        value={identifier}
        onChangeText={setIdentifier}
      />
      <TextInput
        style={styles.input}
        placeholder="Plant Type"
        value={plantType}
        onChangeText={setPlantType}
      />
      <Text style={styles.label}>Growth Method</Text>
      <View style={styles.buttonRow}>
        <Button
          title="Soil"
          onPress={() => setGrowthMethod('soil')}
          color={growthMethod === 'soil' ? 'green' : 'gray'}
        />
        <Button
          title="Hydroponic"
          onPress={() => setGrowthMethod('hydroponic')}
          color={growthMethod === 'hydroponic' ? 'green' : 'gray'}
        />
      </View>
      <Button title="Add Mod" onPress={handleAddMod} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  label: { marginTop: 10, marginBottom: 5 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
}); 