import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import libros from "../data/libros.json"
import BookCategoryDetail from '../components/BookCategoryDetail'

const Books = ({ categorySelected }) => {
  const [booksFiltered, setBooksFiltered] = useState([])

  useEffect(() => {
    if (categorySelected) {
      setBooksFiltered(libros.filter(libro => libro.category === categorySelected))
    }
  }, [categorySelected])

  return (
    <View>
      <Header title={categorySelected || "Bienvenid@s"}
        sub={"Todo lo que querés leer sobre: " + (categorySelected.toLowerCase()) + "."}
      />
      <FlatList 
      data={booksFiltered}
      key={item => item.id}
      renderItem={({item}) => 
        <BookCategoryDetail item={item}/>
      }
      />
    </View>
  )
}

export default Books

const styles = StyleSheet.create({})