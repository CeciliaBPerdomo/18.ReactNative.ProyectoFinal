import { FlatList, View, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'

import { useGetBooksbyCategoriesQuery } from '../app/services/bookstore'

import BookCategoryDetail from '../components/BookCategoryDetail'
import SearchBar from '../components/wrappers/SearchBar'


const Books = ({ route, navigation }) => {
  const { categorySelected } = route.params
  const { data: books } = useGetBooksbyCategoriesQuery(categorySelected)

  // Search
  const [booksFiltered, setBooksFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")


  useEffect(() => {

    setBooksFiltered(books)

    if (keyWord) {
      setBooksFiltered(books.filter(libro => {
        const titulo = libro.title.toLowerCase()
        const palabraClave = keyWord.toLowerCase()
        return titulo.includes(palabraClave)
      }))
    }

  }, [categorySelected, keyWord, books])

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }


  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
      marginBottom: 160
  }
})