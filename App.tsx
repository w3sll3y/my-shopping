import { Text, View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ?
        <Routes /> :
        <Loading />
      }
    </NativeBaseProvider>
  );
}
