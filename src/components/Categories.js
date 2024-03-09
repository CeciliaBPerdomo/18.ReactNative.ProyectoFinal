import { View, FlatList } from 'react-native'
import CardCategory from './CardCategory'

import { useGetCategoriesQuery } from '../app/services/bookstore'

const Categories = ({ navigation }) => {

  const { data: categoria } = useGetCategoriesQuery()
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
