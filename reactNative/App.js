//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import MainPage from './Components/main';
import { LinearGradient } from 'react-native-svg';


export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };
  return (
    <NativeBaseProvider config={config}>
      <MainPage/>
    </NativeBaseProvider>
  );
}

