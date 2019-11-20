import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker';


export const SelectedDate = ({ chosenDate, onDateChange }) => (
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

export const StartDate = ({ startDate, onDateChangeStart }) => (
  <View style={styles.container}>
    <DatePicker
      date={startDate}
      style={styles.input}
      onDateChange={onDateChangeStart}
      format="DD-MM-YYYY"
      placeholder="Select start date"
    />
  </View>
)

export const EndDate = ({ endDate, onDateChangeEnd }) => (
  <View style={styles.container}>
    <DatePicker
      date={endDate}
      style={styles.input}
      onDateChange={onDateChangeEnd}
      format="DD-MM-YYYY"
      placeholder="Select end date"
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

