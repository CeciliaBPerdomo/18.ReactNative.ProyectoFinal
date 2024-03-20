import { StyleSheet, Text, Image, View, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import colors from '../utils/colors'

// Redux
import { useDispatch } from 'react-redux'
import { addCartItem } from "../features/cart/cartSlice"
import { useGetProductByIdQuery } from '../app/services/bookstore'

// Manejo de errores
import LoadingSpinner from '../components/manejoErrores/LoadingSpinner'
import ErrorCarga from '../components/manejoErrores/ErrorCarga'
import ListaVacia from '../components/manejoErrores/ListaVacia'
import Counter from '../components/Counter'
import fonts from '../utils/fonts'

const BooksDetail = ({ route, navigation }) => {
  // Rotacion
  const [portait, setPortait] = useState(true)
  const { width, height } = useWindowDimensions()

  const dispatch = useDispatch()
  const { libroId } = route.params

  const { data: book, isLoading, isError, isSuccess } = useGetProductByIdQuery(libroId)

  useEffect(() => {
    if (width > height) {
      setPortait(false)
    } else {
      setPortait(true)
    }

  }, [libroId, height, width])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <ErrorCarga message="Ups! algo salio muy mal" textButton="Volver" onRetry={() => navigation.goBack()} />
  if (isSuccess && book.length === 0) return <ListaVacia message="No existen libros" />

  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({ ...book, quantity }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> {book.title} </Text>
      <Text style={styles.autor}>{book.author}</Text>

      <Image
        style={[styles.imagen, !portait && styles.imagenPortait]}
        source={{ uri: book.image }}
        resizeMode="cover"
      />

      <Counter
        initialValue={1}
        handlerAddCartItem={handlerAddCartItem}
      />

      <View style={[
        styles.priceContainer,
        !portait && styles.priceContainerPortait
      ]}>

        <Text style={styles.price}>$ {book.price}</Text>

      </View>
    </View>
  )
}

export default BooksDetail

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 80,
    flex: 1
  },

  contentPortait: {
    flexDirection: "row",
    gap: 10,
    padding: 20
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 3,
    fontFamily: fonts.Playfair
  },

  autor: {
    marginBottom: 3
  },

  content: {
    width: "100%",
  },

  imagen: {
    width: 150,
    height: "55%",
    borderRadius: 25,
    marginBottom: 5,
    marginTop: 5
  },

  imagenPortait: {
    width: "40%",
    height: 200
  },

  priceContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 18,
    backgroundColor: colors.bordes
  },

  priceContainerPortait: {
    width: "20%",
    flexDirection: "column"
  },

  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.precio,
  }
})