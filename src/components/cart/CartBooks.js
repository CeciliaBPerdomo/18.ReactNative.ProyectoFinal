import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { Entypo } from "@expo/vector-icons"

const CartBooks = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image 
      source={{uri: item.image}}
      width={75}
      height={75}
      style={styles.imagen}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.author}</Text>
        <Text style={styles.text2}>$ {item.price}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  )

}

export default CartBooks

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.botones,
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.bordes,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center"
  },

  textContainer: {
    width: "65%"
  },

  text: {
    color: colors.primary,
    fontSize: 19,
    fontFamily: fonts.Playfair
  },

  text2: {
    fontSize: 14,
  },

  imagen: {
    marginRight: 8
  }
})