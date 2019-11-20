import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Your Expense Details 
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 50
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    color: 'rgba(175, 47, 47, 0.9)',
    fontWeight: '100'
  }
})

export default Heading