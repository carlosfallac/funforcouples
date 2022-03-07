import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes"
import { Preload } from "./src/screens/Authentication/Preload";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <Preload />
    );
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </GestureHandlerRootView>
    );
  }
}
