import { StyleSheet, Text, View, Modal } from 'react-native'
import AddButton from '../forms/AddButton'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const ModalMessage = ({ text, textButton, onClose, modalVisible }) => {
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.content}>

                    <Text style={styles.texto}>
                        {text}
                    </Text>

                    <AddButton
                        title={textButton}
                        onPress={onClose}
                    />

                </View>
            </View>
        </Modal>
    )
}

export default ModalMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    content: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.iconos,
        padding: 30,
        gap: 20,
        borderRadius: 15,
    },

    texto: {
        fontSize: 16,
        color: colors.primary,
        fontFamily: fonts.Playfair
    },
})