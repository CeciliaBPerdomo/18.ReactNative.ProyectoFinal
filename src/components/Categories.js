import { View, FlatList, Text } from 'react-native'
import CardCategory from './CardCategory'

// Redux con Firebase
import { useGetCategoriesQuery } from '../app/services/bookstore'

// Manejo de errores
import LoadingSpinner from './manejoErrores/LoadingSpinner'
import ErrorCarga from './manejoErrores/ErrorCarga'
import ListaVacia from './manejoErrores/ListaVacia'

const Categories = ({ navigation }) => {

  const { data: categoria, isLoading, isError, isSuccess } = useGetCategoriesQuery()

  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    })
  }

  if (isLoading) return <LoadingSpinner />
  if (isError) return <ErrorCarga message="Ups! algo salio muy mal!" textButton="Recargar" onRetry={onRetry} />
  if (isSuccess && categoria == null) return <ListaVacia message="No existen categorias" />

  return (
    <View>

      <FlatList
        data={categoria}
        key={item => item.categoria}
        renderItem={({ item }) => (
          <CardCategory
            item={item}
            navigation={navigation}
          />
        )}
      //horizontal={true} --> para que quede como menu horizontal
      />

    </View>
  )
}

export default Categories
