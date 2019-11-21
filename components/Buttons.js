import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export const CancelButton = ({ getCancel }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button1}
      onPress={getCancel}>
      <Text style={styles.text}>
        Cancel
      </Text>
    </TouchableHighlight>
  </View>
)

export const DoneButton = ({ getDone }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button1}
      onPress={getDone}>
      <Text style={styles.text}>
        Done
        </Text>
    </TouchableHighlight>
  </View>
)

export const FetchAllButton = ({ fetchAll }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button2}
      onPress={fetchAll}>
      <Text style={styles.text}>
        Full Expense Statement
        </Text>
    </TouchableHighlight>
  </View>
)

export const FetchSelectedButton = ({ fetchSelected }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button2}
      onPress={fetchSelected}>
      <Text style={styles.text}>
        Selected Expense Statement
        </Text>
    </TouchableHighlight>
  </View>
)

export const SubmitButton = ({ getSelectedExpense }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button1}
      onPress={getSelectedExpense}>
      <Text style={styles.text}>
        Submit
        </Text>
    </TouchableHighlight>
  </View>
)


export const GoBackdButton = ({ goBackToMain }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button2}
      onPress={goBackToMain}>
      <Text style={styles.text}>
        Go Back To Main Screen
        </Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 50,
    marginLeft: 150,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#ededed',
    borderWidth: 5,
    borderRadius: 25,
    marginLeft: 100,
    marginTop: 10,
    backgroundColor: 'rgba(175, 47, 47, 0.8)',
    width: 200,

  },

  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#ededed',
    borderWidth: 5,
    borderRadius: 25,
    marginLeft: 75,
    marginTop: 10,
    backgroundColor: 'rgba(175, 47, 47, 0.8)',
    width: 300,
  },

  text: {
    color: '#fff',
    fontSize: 20,
  }
})

