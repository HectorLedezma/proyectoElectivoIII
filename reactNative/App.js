//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
//import MainPage from './Components/main';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import Login from './pages/login';
import Navi from './routes/Navi';

const fetchFonts = () => {
  return Font.loadAsync({
    'fuenteAncha': require('./assets/fonts/RutaCL_Condensada.ttf'),
    'fuenteRegular': require('./assets/fonts/RutaCL_Regular.ttf')
  });
};

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NativeBaseProvider config={config}>
      <Navi/>
    </NativeBaseProvider>
  );
}

