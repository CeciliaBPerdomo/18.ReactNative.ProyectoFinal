import { StatusBar } from 'react-native';
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/fonts';

// Navegacion
import MainNavigation from './src/navigation/MainNavigation';
import colors from './src/utils/colors';

const App = () => {
  // Fuente de las letras
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      {/* Barra de estado */}
      <StatusBar
        backgroundColor={colors.bordes}
        barStyle={"dark-content"}
      />

      {/* Navegacion */}
      <MainNavigation />
    </>
  );
}

export default App