import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Amount = ({inputValue, inputChange}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='Amount Value'
      placeholderTextColor='#CACACA'
      selectionColor='#666666' 
      onChangeText={inputChange}
      />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginLeft: 120,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    width: 200
  },
  input: {
    height: 60,
    width: 200,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default Amount;