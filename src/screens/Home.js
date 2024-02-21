import { StyleSheet, Text, View } from 'react-native'
import Categories from '../components/Categories'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center", 
  }
})