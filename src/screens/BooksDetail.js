import { StyleSheet, Text, Image, View, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'

import libros from "../data/libros.json"
import colors from '../utils/colors'

const BooksDetail = ({ route }) => {
  const { libroId } = route.params
  const [book, setBook] = useState({})

  // Rotacion
  const [portait, setPortait] = useState(true)
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    const libro = libros.find(item => item.id === libroId)
    setBook(libro)

    if (width > height) {
      setPortait(false)
    } else {
      setPortait(true)
    }

  }, [libroId, height, width])


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{book.title}</Text>

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

      <Text style={styles.titulo}>{book.author}</Text>

      <View style={[
        styles.priceContainer,
        !portait && styles.priceContainerPortait
        ]}>
        <Text style={styles.price}>$ {book.price}</Text>

        <Pressable style={styles.buyNowBotton}>
          <Text style={styles.textBuy}>
            Comprar
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
    flex: 1
  },

  contentPortait: {
    flexDirection: "row",
    gap: 10,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 10,
  },

  content: {
    width: "100%",
  },

  imagen: {
    width: 350,
    height: 280,
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
    marginVertical: 10
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