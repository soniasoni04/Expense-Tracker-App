import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Comment =  ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='Comments'
      placeholderTextColor='#CACACA'
      selectionColor='#666666' 
      onChangeText={inputChange} 
      />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    margin: 40,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 }
  },
  input: {
    height: 80,
    backgroundColor: '#ffffff',
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default Comment