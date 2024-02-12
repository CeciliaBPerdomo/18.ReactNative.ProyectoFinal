import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Home from './src/screens/Home';
import Books from './src/screens/Books';

import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/fonts';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  const [ fontsLoaded ] = useFonts({fontCollection})

  // if (!fontsLoaded) {
  //   return null
  // }
  
  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  return (
    <View>
      {categorySelected ?
        <Books categorySelected={categorySelected} selectedCategoryState={selectedCategoryState} /> :
        <Home selectedCategoryState={selectedCategoryState} />
      }
    </View>
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
