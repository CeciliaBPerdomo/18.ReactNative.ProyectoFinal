import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View>
      <Text>
        {label}
      </Text>

      <TextInput 
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({})