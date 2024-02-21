import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header title="Bienvenid@s" sub="¿Qué vas a leer hoy?" /> */}
      <Categories navigation={navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center"
  }
})