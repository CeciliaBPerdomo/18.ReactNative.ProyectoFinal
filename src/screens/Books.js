import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'

import libros from "../data/libros.json"

import Header from '../components/Header'
import BookCategoryDetail from '../components/BookCategoryDetail'
import SearchBar from '../components/wrappers/SearchBar'
import BackHome from '../components/wrappers/BackHome'


const Books = ({ categorySelected, selectedCategoryState }) => {
  const [booksFiltered, setBooksFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")


  useEffect(() => {

    if (categorySelected) {
      setBooksFiltered(libros.filter(libro => libro.category === categorySelected))
    }

    if (keyWord) {
      setBooksFiltered(booksFiltered.filter(libro => {
        const titulo = libro.title.toLowerCase()
        const palabraClave = keyWord.toLowerCase()
        return titulo.includes(palabraClave)
      }))
    }

  }, [categorySelected, keyWord])

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }


  return (
    <View>

      <Header title={categorySelected || "Bienvenid@s"}
        sub={"Todo lo que querés leer sobre: " + (categorySelected.toLowerCase()) + "."}
      />

      <BackHome selectedCategoryState={selectedCategoryState}/>

      <SearchBar handlerKeyWord={handlerKeyWord} />

      <FlatList
        data={booksFiltered}
        key={item => item.id}
        renderItem={({ item }) =>
          <BookCategoryDetail item={item} />
        }
      />

    </View>
  )
}

export default Books

const styles = StyleSheet.create({})