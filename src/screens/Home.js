import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({selectedCategoryState}) => {
  return (
    <View>
      <Header title="Bienvenid@s" sub="¿Qué vas a leer hoy?"/>
      <Categories selectedCategoryState={selectedCategoryState}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})