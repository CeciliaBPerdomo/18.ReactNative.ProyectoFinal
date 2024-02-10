import { StyleSheet, View, FlatList } from 'react-native'
import categoria from "../data/categoria.json"
import CardCategory from './CardCategory'

const Categories = ({selectedCategoryState}) => {
  return (
    <View>
      <FlatList 
        data={categoria}
        key={item => item}
        renderItem={({item}) => (
            <CardCategory item={item} selectedCategoryState={selectedCategoryState} />
        )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
})