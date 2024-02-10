import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { useState, useEffect } from 'react';
import Books from './src/screens/Books';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  useEffect(() => { //Muestra la categoria seleccionada
    console.log(categorySelected)
  }, [categorySelected])

  return (
    <View>
      {categorySelected ?
        <Books categorySelected={categorySelected} /> :
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
