import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import ProviderReceta from './Providers/ProviderReceta';

export default function App() {
  return (
    <ProviderReceta>
      <Navegacion></Navegacion>

    </ProviderReceta>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
