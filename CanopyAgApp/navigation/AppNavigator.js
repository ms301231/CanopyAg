import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ModListScreen from '../screens/ModListScreen';
import AddModScreen from '../screens/AddModScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ModList" component={ModListScreen} options={{ title: 'My Mods' }} />
        <Stack.Screen name="AddMod" component={AddModScreen} options={{ title: 'Add Mod' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 