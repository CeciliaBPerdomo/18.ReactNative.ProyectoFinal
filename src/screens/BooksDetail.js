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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{book.title} - {book.author}</Text>

      <View style={[styles.content,
      // si esta acostado
      !portait && styles.contentPortait
      ]}>

        <Image
          style={[styles.imagen,
          !portait && styles.imagenPortait
          ]}
          source={{ uri: book.image }}
          resizeMode="cover"
        />

      </View>

      <View style={[
        styles.priceContainer,
        !portait && styles.priceContainerPortait
      ]}>
        <Text style={styles.price}>$ {book.price}</Text>

        <Pressable style={styles.buyNowBotton} onPress={() => dispatch(addCartItem(book))}>
          <Text style={styles.textBuy}>
            Agregar al carrito
          </Text>
        </Pressable>
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
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 10,
  },

  content: {
    width: "100%",
  },

  imagen: {
    width: 350,
    height: 240,
    borderRadius: 5,
  },

  imagenPortait: {
    width: "40%",
    height: 200
  },

  priceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 18,
    backgroundColor: "#FFF",
  },

  priceContainerPortait: {
    width: "20%",
    flexDirection: "column"
  },

  textBuy: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },

  buyNowBotton: {
    backgroundColor: colors.botones,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5
  },

  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.precio
  }
})