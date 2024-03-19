import { FlatList, View, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'

import { useGetBooksbyCategoriesQuery } from '../app/services/bookstore'

import BookCategoryDetail from '../components/BookCategoryDetail'
import SearchBar from '../components/wrappers/SearchBar'

//Manejo de errores
import LoadingSpinner from '../components/manejoErrores/LoadingSpinner'
import ErrorCarga from '../components/manejoErrores/ErrorCarga'
import ListaVacia from '../components/manejoErrores/ListaVacia'


const Books = ({ route, navigation }) => {
  // Search
  const [booksFiltered, setBooksFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")
  const { categorySelected } = route.params
  const { data: books, isLoading, isError, isSuccess } = useGetBooksbyCategoriesQuery(categorySelected)

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

  if (isLoading) return <LoadingSpinner />
  if (isError) return <ErrorCarga message="Ups! algo salio muy mal" textButton="Volver" onRetry={() => navigation.goBack()} />
  if (isSuccess && books == null) return <ListaVacia message="No existen libros" />

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
    marginBottom: 160,
  }
})