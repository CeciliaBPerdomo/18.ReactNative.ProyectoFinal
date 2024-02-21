import { View, FlatList } from 'react-native'

import categoria from "../data/categoria.json"
import CardCategory from './CardCategory'

const Categories = ({ navigation }) => {
  return (
    <View>

      <FlatList
        data={categoria}
        key={item => item}
        renderItem={({ item }) => (

          <CardCategory
            item={item}
            navigation={navigation}
          />
        )}
      />

    </View>
  )
}

export default Categories
