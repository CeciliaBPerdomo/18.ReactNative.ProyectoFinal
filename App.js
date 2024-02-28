import { StatusBar } from 'react-native';
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/fonts';
import colors from './src/utils/colors';

// Navegacion
import MainNavigation from './src/navigation/MainNavigation';

// Redux
import { store } from "./src/app/store"
import { Provider } from 'react-redux'


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

      <Provider store={store}>
        {/* Navegacion */}
        <MainNavigation />
      </Provider>
    </>
  );
}

export default App