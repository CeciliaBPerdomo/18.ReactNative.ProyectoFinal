import { Pressable, StyleSheet, Text, View } from 'react-native'

const SubmitForm = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <Text>
                {title}
            </Text>

        </Pressable>
    )
}

export default SubmitForm

const styles = StyleSheet.create({
    
})