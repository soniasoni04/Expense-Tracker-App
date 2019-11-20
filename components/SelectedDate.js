import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker';


const SelectedDate = ({ chosenDate, onDateChange }) => (
  <View style={styles.container}>
    <DatePicker
      date={chosenDate}
      style={styles.input}
      onDateChange={onDateChange}
      format="DD-MM-YYYY"
      placeholder="Select date"
    />
  </View>

)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    marginLeft: 120,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    width: 200,
  },
   input: {
    height: 60,
    width: 200,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default SelectedDate;
