import { StyleSheet, Text, View } from 'react-native'

const Shadows = ({style, children}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default Shadows

const styles = StyleSheet.create({
    container: {
        /*Android */
        elevation: 10,

        /* IOS */
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30
    },
})