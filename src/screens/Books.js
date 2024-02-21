import { FlatList, View } from 'react-native'
import { useEffect, useState } from 'react'

import libros from "../data/libros.json"

import BookCategoryDetail from '../components/BookCategoryDetail'
import SearchBar from '../components/wrappers/SearchBar'


const Books = ({ route, navigation }) => {
  const { categorySelected } = route.params

  // Search
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
      <SearchBar handlerKeyWord={handlerKeyWord} />

      <FlatList
        data={booksFiltered}
        key={item => item.id}
        renderItem={({ item }) =>
          <BookCategoryDetail
            item={item}
            navigation={navigation}
          />
        }
      />

    </View>
  )
}

export default Books